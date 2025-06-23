'use client';

import MessagingChat from '../components/MessagingChat';

export default function Page() {
  

  return (
    <main>
      <h1>Résultat :</h1>
       <MessagingChat senderId="0d4488a2-3fef-4e07-8123-3f7fe40e2a1d" recipientId="78de6ccd-512b-452f-ac15-677cec99b91e" />
        <MessagingChat senderId="78de6ccd-512b-452f-ac15-677cec99b91e" recipientId="0d4488a2-3fef-4e07-8123-3f7fe40e2a1d" />
 
    </main>
  );
}
