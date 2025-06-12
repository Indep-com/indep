'use client'

import { useEffect, useState } from 'react'

type Mission = {
  id: number
  title: string
  description: string
  price: number
  status: string
}

export default function MissionsPage() {
  const [missions, setMissions] = useState<Mission[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/missions') // ton indep-api
      .then(res => res.json())
      .then(data => setMissions(data))
      .catch(err => {
        console.error('Erreur lors du fetch des missions :', err)
      })
  }, [])

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Missions disponibles</h1>
      <ul>
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
    </main>
  )
}
