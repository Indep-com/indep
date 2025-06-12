'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3002/hello-world')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage('Erreur : ' + err.message));
  }, []);

  return (
    <main>
      <h1>Résultat :</h1>
      <p>{message}</p>
    </main>
  );
}
