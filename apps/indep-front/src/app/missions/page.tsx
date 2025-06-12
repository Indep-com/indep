'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Mission = {
  id: number
  title: string
  description: string
  price: number
  status: string
}

export default function MissionsPage() {
  const [missions, setMissions] = useState<Mission[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch('http://localhost:3000/missions')
      .then(res => res.json())
      .then(data => setMissions(data))
      .catch(err => console.error('Erreur fetch missions:', err))
  }, [])

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Missions disponibles</h1>

      <ul style={{ marginBottom: '2rem' }}>
        {missions.map(mission => (
          <li key={mission.id}>
            <h3>{mission.title}</h3>
            <p>{mission.description}</p>
            <p><strong>Prix :</strong> {mission.price} €</p>
            <p><em>Status :</em> {mission.status}</p>
            <hr />
          </li>
        ))}
      </ul>

      <button
        onClick={() => router.push('/missions/create')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
         Ajouter une mission
      </button>
    </main>
  )
}
