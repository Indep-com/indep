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

  const getUserName = (id: string) => {
    const user = users.find((u) => u.id === id);
    return user ? user.name : id;
  };

  if (!userId) {
    return <div>Utilisateur non authentifié</div>;
  }

  if (selectedUserId) {
    return (
      <div>
        <button onClick={() => setSelectedUserId(null)}>← Retour</button>
        <MessageChat senderId={userId} recipientId={selectedUserId} />
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
          {conversations.map((conv) => {
            const otherUserId =
              conv.senderId === userId ? conv.recipientId : conv.senderId;
            return (
              <li
                key={conv.id}
                onClick={() => setSelectedUserId(otherUserId)}
                style={{ cursor: "pointer" }}
              >
                <b>{getUserName(otherUserId)}</b> : {conv.message}
                <span style={{ color: "#888", marginLeft: 8 }}>
                  {new Date(conv.timestamp).toLocaleString()}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}