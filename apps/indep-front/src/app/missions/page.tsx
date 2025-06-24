'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import './page.css'

type Mission = {
  id: string
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
    <main className="missions-container">
      <h1 className="missions-heading">Missions disponibles</h1>

      <ul className="missions-list">
        {missions.map(mission => (
          <li
            key={mission.id}
            className="mission-card clickable"
            onClick={() => 
              router.push(`/missions/${mission.id}`)}
          >
            <h3>{mission.title}</h3>
            <p>{mission.description}</p>
            <p><strong>Prix :</strong> {mission.price} €</p>
            <p><em>Status :</em> {mission.status}</p>
          </li>
        ))}
      </ul>

      <button className="add-mission-btn" onClick={() => router.push('/missions/create')}>
        Ajouter une mission
      </button>
    </main>
  )
}
