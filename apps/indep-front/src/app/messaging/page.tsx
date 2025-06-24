"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import MessageChat from "../../components/MessagingChat";

interface Conversation {
  id: string;
  senderId: string;
  recipientId: string;
  message: string;
  timestamp: string;
}

interface User {
  id: string;
  name: string;
}

interface JwtPayload {
  sub: string;
}

export default function ConversationChat() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [userNames, setUserNames] = useState<{ [id: string]: string }>({});

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setUserId(decoded.sub);
      } catch (e) {
        setUserId(null);
      }
    }
  }, []);

  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:3001/messages/conversations?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setConversations(data));
  }, [userId]);

  useEffect(() => {
    if (showUsers && userId) {
      fetch("http://localhost:3001/utilisateur/recupererToutUtilisateur")
        .then((res) => res.json())
        .then((data) => setUsers(data.filter((u: User) => u.id !== userId)));
    }
  }, [showUsers, userId]);

  // Fonction pour récupérer le nom d'un utilisateur par son id (avec cache)
  const fetchUserName = async (id: string) => {
    if (userNames[id]) return;
    const res = await fetch(`http://localhost:3001/utilisateur/${id}/recupererUnUtilisateurParId`);
    const user = await res.json();
    setUserNames((prev) => ({ ...prev, [id]: user.name || user.id }));
  };

  // Complète le cache userNames pour tous les autres users des conversations
  useEffect(() => {
    conversations.forEach((conv) => {
      const otherUserId = conv.senderId === userId ? conv.recipientId : conv.senderId;
      if (!users.find((u) => u.id === otherUserId) && !userNames[otherUserId]) {
        fetchUserName(otherUserId);
      }
    });
  }, [conversations, users, userId]);

  const getUserName = (id: string) => {
    const user = users.find((u) => u.id === id);
    return user ? user.name : userNames[id] || "Utilisateur inconnu";
  };

  const refreshConversations = () => {
    if (!userId) return;
    fetch(`http://localhost:3001/messages/conversations?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setConversations(data));
  };

  if (!userId) {
    return <div>Utilisateur non authentifié</div>;
  }

  if (selectedUserId) {
    return (
      <div>
        <button onClick={() => setSelectedUserId(null)}>← Retour</button>
        <MessageChat
          senderId={userId}
          recipientId={selectedUserId}
          onMessageSent={refreshConversations}
        />
      </div>
    );
  }

  return (
    <div>
      <h2>Mes conversations</h2>
      <button onClick={() => setShowUsers((v) => !v)}>Nouveau message</button>
      {showUsers && (
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowUsers(false);
                setSelectedUserId(user.id);
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
      {conversations.length === 0 ? (
        <div>
          <p>Aucune conversation.</p>
        </div>
      ) : (
        <ul>
          {Object.values(
            conversations.reduce<{ [key: string]: Conversation }>((acc, conv) => {
              const otherUserId =
                conv.senderId === userId ? conv.recipientId : conv.senderId;
              // On garde la première conversation trouvée pour chaque utilisateur
              if (!acc[otherUserId]) {
                acc[otherUserId] = conv;
              }
              return acc;
            }, {})
          ).map((conv) => {
            const otherUserId =
              conv.senderId === userId ? conv.recipientId : conv.senderId;
            return (
              <li
                key={otherUserId}
                onClick={() => setSelectedUserId(otherUserId)}
                style={{ cursor: "pointer" }}
              >
                <b>{getUserName(otherUserId)}</b>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}