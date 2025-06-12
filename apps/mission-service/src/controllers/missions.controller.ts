import { Request, Response } from 'express'
import { pool } from '../db'

// GET /missions
export const getMissions = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM missions ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (error: any) {
    console.error('Erreur dans getMissions:', error.message)
    res.status(500).json({ message: 'Erreur serveur dans getMissions' })
  }
}

// GET /missions/:id
export const getMissionById = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await pool.query('SELECT * FROM missions WHERE id = $1', [id])
  if (result.rowCount === 0) return res.status(404).json({ message: 'Mission not found' })
  res.json(result.rows[0])
}

// POST /missions
import { v4 as uuidv4 } from 'uuid'

export const createMission = async (req: Request, res: Response) => {
  try {
    const { title, description, price, status } = req.body

    if (!title) {
      return res.status(400).json({ message: "Le champ 'title' est obligatoire" })
    }

    const id = uuidv4() // 🆕 Génère un UUID

    const result = await pool.query(
      `INSERT INTO missions (id, title, description, price, status)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [id, title, description, price, status]
    )

    res.status(201).json(result.rows[0])
  } catch (error: any) {
    console.error('Erreur lors de la création de mission:', error.message)
    res.status(500).json({ message: error.message })
  }
}


// PUT /missions/:id
export const updateMission = async (req: Request, res: Response) => {
  const { id } = req.params
  const { user_id, title, description, price, status } = req.body
  const result = await pool.query(
    `UPDATE missions SET user_id = $1, title = $2, description = $3, price = $4, status = $5
     WHERE id = $6 RETURNING *`,
    [user_id, title, description, price, status, id]
  )
  res.json(result.rows[0])
}

// DELETE /missions/:id
export const deleteMission = async (req: Request, res: Response) => {
  const { id } = req.params
  await pool.query('DELETE FROM missions WHERE id = $1', [id])
  res.status(204).send()
}
