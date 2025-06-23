'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateMissionPage() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const payload = {
      title,
      description,
      price: parseFloat(price),
      status: 'ouverte',
      user_id: 1, // 🟡 à adapter selon ton auth (pour l’instant, on force)
    }

    try {
      const res = await fetch('http://localhost:3000/missions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.message || 'Erreur inconnue')
      }

      router.push('/missions') // redirection après création
    } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Erreur inconnue')
        }
      }      
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Créer une mission</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <label>Titre</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />

        <label>Prix (€)</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />

        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem', background: '#0070f3', color: 'white' }}>
          Créer
        </button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '1rem' }}>
          ❌ {error}
        </p>
      )}
    </main>
  )
}
