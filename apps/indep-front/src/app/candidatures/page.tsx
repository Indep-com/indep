'use client'

import { useEffect, useState } from 'react'

type Candidature = {
  id: string
  lettre_motivation?: string
  status?: string
  missions?: {
    title: string
  }
  users?: {
    name: string
  }
}

export default function CandidaturesPage() {
  const [candidatures, setCandidatures] = useState<Candidature[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/candidatures')
      .then(res => res.json())
      .then(data => setCandidatures(data))
      .catch(err => console.error('Erreur chargement candidatures:', err))
  }, [])

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Mes candidatures</h1>
      {candidatures.length === 0 ? (
        <p>Aucune candidature trouvée.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {candidatures.map(candidature => (
            <li key={candidature.id} style={cardStyle}>
              <p style={{ color: 'black' }}><strong>Mission:</strong> {candidature.missions?.title ?? 'Non précisée'}</p>
              <p style={{ color: 'black' }}><strong>Status :</strong> {candidature.status}</p>
              <p style={{ color: 'black' }}><strong>Motivation :</strong> {candidature.lettre_motivation || '—'}</p>
              <p style={{ color: 'black' }}><strong>Candidat :</strong> {candidature.users?.name ?? 'Anonyme'}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

const cardStyle: React.CSSProperties = {
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  color: 'black',
}
