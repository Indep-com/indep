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

export default function Chat({ senderId, recipientId }: { senderId: string; recipientId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(`http://localhost:4002/messages?senderId=${senderId}&recipientId=${recipientId}`)
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
  };

  return (
    <div>
      <h2>Chat avec {recipientId}</h2>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>
            <b>{msg.senderId}</b> : {msg.message}
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
