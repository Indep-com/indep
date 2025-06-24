'use client';
import { useEffect, useState } from 'react';
import socket from '../../lib/socket';

interface Message {
  id?: string;
  senderId: string;
  recipientId: string;
  message: string;
  timestamp?: string;
}

interface User {
  id: string;
  name: string;
}

export default function Chat({ senderId, recipientId, onMessageSent }: { senderId: string; recipientId: string; onMessageSent?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const [userNames, setUserNames] = useState<{ [id: string]: string }>({});

  // Fonction pour récupérer et stocker le nom d'un utilisateur
  const fetchUserName = async (id: string) => {
    if (userNames[id]) return; 
    const res = await fetch(`http://localhost:3000/utilisateur/${id}/recupererUnUtilisateurParId`);
    const user = await res.json();
    setUserNames((prev) => ({ ...prev, [id]: user.name || id }));
  };

  // Charger les noms des utilisateurs présents dans les messages
  useEffect(() => {
    const ids = new Set<string>();
    messages.forEach((msg) => {
      ids.add(msg.senderId);
      ids.add(msg.recipientId);
    });
    ids.forEach((id) => {
      if (!userNames[id]) fetchUserName(id);
    });
  }, [messages]);

  useEffect(() => {
    fetch(`http://localhost:3000/messages?senderId=${senderId}&recipientId=${recipientId}`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [senderId, recipientId]);

  useEffect(() => {
    if (!socket) return;

    socket.on('newMessage', (msg: Message) => {
      const relevant = [msg.senderId, msg.recipientId].includes(senderId);
      if (relevant) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socket.off('newMessage');
    };
  }, [senderId]);

  const sendMessage = async () => {
    const message: Message = { senderId, recipientId, message: text };

    await fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    socket.emit('sendMessage', message);
    setText('');
    if (onMessageSent) onMessageSent();
  };

  // Utilitaire pour afficher le nom ou l'id si pas encore chargé
  const getUserName = (id: string) => userNames[id] || id;

  useEffect(() => {
    if (recipientId && !userNames[recipientId]) {
      fetchUserName(recipientId);
    }
  }, [recipientId]);

  return (
    <div>
      <h2>Chat avec {getUserName(recipientId)}</h2>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>
            <b>{getUserName(msg.senderId)}</b> : {msg.message}
          </li>
        ))}
      </ul>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Écris ton message..."
      />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}
