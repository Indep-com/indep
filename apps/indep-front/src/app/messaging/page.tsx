"use client";
import React, { useEffect, useState } from "react";
import MessageChat from "../../components/MessagingChat";

interface Conversation {
  id: string;
  senderId: string;
  recipientId: string;
  message: string;
  timestamp: string;
}

export default function ConversationChat({
  userId,
  onSelectConversation,
}: {
  userId: string;
  onSelectConversation?: (userId: string) => void;
}) {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:3001/messages/conversations?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setConversations(data));
  }, [userId]);

  return (
    <div>
      <h2>Mes conversations</h2>
      <ul>
        {conversations.map((conv) => {
          const otherUserId =
            conv.senderId === userId ? conv.recipientId : conv.senderId;
          return (
            <li
              key={conv.id}
              onClick={() => onSelectConversation?.(otherUserId)}
              style={{ cursor: "pointer" }}
            >
              <b>{otherUserId}</b> : {conv.message}
              <span>
                {new Date(conv.timestamp).toLocaleString()}
                <MessageChat
                  senderId={conv.senderId}
                  recipientId={conv.recipientId}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}