'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

type Mission = {
  id: string
  title: string
  description: string
  price: number
  status: string
}

export default function MissionDetailPage() {
  const [mission, setMission] = useState<Mission | null>(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const params = useParams()

  // 🔧 Mock du rôle pour test local
  const userRole = 'freelance'
  console.log('params.id =', params.id, ' (type: ', typeof params.id, ')')

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const res = await fetch(`http://localhost:3000/missions/${params.id}`)
        const data = await res.json()
        console.log('Mission reçue :', data)
        setMission(data)
      } catch (err) {
        console.error('Erreur fetch mission:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMission()
  }, [params.id])

  const handleCandidature = async () => {
    const token = localStorage.getItem('token')

    try {
      const res = await fetch('http://localhost:3000/candidatures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mission_id: params.id,
          lettre_motivation: 'Je suis motivé !',
        }),
      })

      if (res.ok) {
        setMessage('🎉 Candidature envoyée avec succès !')
      } else {
        setMessage('❌ Erreur lors de la candidature.')
      }
    } catch (err) {
      console.error(err)
      setMessage('❌ Erreur réseau.')
    }
  }

  if (loading) return <p>Chargement...</p>
  if (!mission) return <p>Mission introuvable.</p>

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{mission.title}</h1>
      <p><strong>Description :</strong> {mission.description}</p>
      <p><strong>Prix :</strong> {mission.price} €</p>
      <p><strong>Status :</strong> {mission.status}</p>

      {userRole === 'freelance' && (
        <button onClick={handleCandidature}>Candidater</button>
      )}

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </main>
  )
}
