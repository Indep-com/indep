import React, { useEffect, useState } from "react";

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
    fetch(`http://localhost:3000/messages/conversations?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setConversations(data));
  }, [userId]);


  const uniqueConversations = Object.values(
    conversations.reduce<{ [key: string]: Conversation }>((acc, conv) => {
      const otherUserId =
        conv.senderId === userId ? conv.recipientId : conv.senderId;
      // On garde le message le plus récent
      if (
        !acc[otherUserId] ||
        new Date(conv.timestamp) > new Date(acc[otherUserId].timestamp)
      ) {
        acc[otherUserId] = conv;
      }
      return acc;
    }, {})
  );

  return (
    <div>
      <h2>Mes conversations</h2>
      <ul>
        {uniqueConversations.map((conv) => {
          const otherUserId =
            conv.senderId === userId ? conv.recipientId : conv.senderId;
          return (
            <li
              key={otherUserId}
              onClick={() => onSelectConversation?.(otherUserId)}
              style={{ cursor: "pointer" }}
            >
              <b>{otherUserId}</b> : {conv.message}
              <span style={{ color: "#888", marginLeft: 8 }}>
                {new Date(conv.timestamp).toLocaleString()}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}