'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'

type Mission = {
  id: string
  title: string
  description: string
  price: string
  status: string
}

type JwtPayload = {
  sub: string
  email: string
  role: string
  iat: number
  exp: number
}

export default function MissionDetailPage() {
  const [mission, setMission] = useState<Mission | null>(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [motivation, setMotivation] = useState('')
  const [isFreelance, setIsFreelance] = useState(false)
  const params = useParams()

  // Supprimer manuellement le token
  const handleClear = () => {
    localStorage.removeItem('authToken')
    alert('✅ authToken supprimé du localStorage')
    location.reload()
  }

  useEffect(() => {
    // Décodage du JWT
    const token = localStorage.getItem('authToken')
    if (token) {
      try {
        const decodedToken = jwtDecode<JwtPayload>(token)
        if (decodedToken.role === 'freelance') {
          setIsFreelance(true)
        }
      } catch (err) {
        console.error('❌ Erreur lors du décodage du token :', err)
      }
    }

    // Récupération de la mission
    const fetchMission = async () => {
      try {
        const res = await fetch(`http://localhost:3000/missions/${params.id}`)
        const data = await res.json()
        setMission(data)
      } catch (err) {
        console.error('❌ Erreur lors du fetch de la mission :', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMission()
  }, [params.id])

  const handleCandidature = async () => {
    const token = localStorage.getItem('authToken')
    if (!token) return setMessage('❌ Token manquant.')

    let userId: string
    try {
      const decodedToken = jwtDecode<JwtPayload>(token)
      userId = decodedToken.sub
    } catch (err) {
      return setMessage('❌ Token invalide.')
    }

    const payload = {
      mission_id: mission?.id,
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
        setMessage('🎉 Candidature envoyée avec succès !')
      } else {
        const err = await res.json()
        setMessage(`❌ Erreur : ${err.message || 'Serveur'}`)
      }
    } catch (err) {
      console.error('❌ Erreur réseau :', err)
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

      {isFreelance && (
        <>
          <textarea
            placeholder="Votre lettre de motivation..."
            value={motivation}
            onChange={e => setMotivation(e.target.value)}
            rows={4}
            style={{ width: '100%', marginTop: '1rem' }}
          />
          <button onClick={handleCandidature} style={{ marginTop: '1rem' }}>
            Candidater
          </button>
        </>
      )}

      <button onClick={handleClear} style={{ marginTop: '1rem', marginLeft: '1rem' }}>
        Supprimer le authToken
      </button>

      {message && (
        <p style={{ marginTop: '1rem', color: message.startsWith('🎉') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </main>
  )
}
