'use client';

import ConversationChat from '@/components/ConversationChat';
import MessagingChat from '../components/MessagingChat';

export default function Page() {
  

  return (
    <main>
      <h1>Résultat :</h1>

      <ConversationChat userId="0d4488a2-3fef-4e07-8123-3f7fe40e2a1d"/>
      <hr />
       <MessagingChat senderId="0d4488a2-3fef-4e07-8123-3f7fe40e2a1d" recipientId="78de6ccd-512b-452f-ac15-677cec99b91e" />
 
    </main>
  );
}
