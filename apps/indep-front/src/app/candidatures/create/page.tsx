'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateCandidaturePage() {
  const [missionId, setMissionId] = useState('')
  const [userId, setUserId] = useState('')
  const [motivation, setMotivation] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      mission_id: missionId,
      user_id: userId,
      lettre_motivation: motivation,
    }

    try {
      const res = await fetch('http://localhost:3000/candidatures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        router.push('/candidatures')
      } else {
        alert('Erreur lors de la création.')
      }
    } catch (err) {
      console.error(err)
      alert('Erreur réseau.')
    }
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Créer une candidature</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Mission ID :
          <input
            type="text"
            value={missionId}
            onChange={e => setMissionId(e.target.value)}
            required
          />
        </label>
        <label>
          User ID :
          <input
            type="text"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            required
          />
        </label>
        <label>
          Lettre de motivation :
          <textarea
            value={motivation}
            onChange={e => setMotivation(e.target.value)}
            rows={4}
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </main>
  )
}

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '400px',
}
