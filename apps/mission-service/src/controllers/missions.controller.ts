import { Request, Response } from 'express'
import { pool } from '../db'
import { v4 as uuidv4 } from 'uuid'

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
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM missions WHERE id = $1', [id])

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Mission not found' })
    }

    res.json(result.rows[0])
  } catch (error: any) {
    console.error('Erreur dans getMissionById:', error.message)
    res.status(500).json({ message: 'Erreur serveur dans getMissionById' })
  }
}

// POST /missions
export const createMission = async (req: Request, res: Response) => {
  try {
    const { title, description, price, status } = req.body

    if (!title) {
      return res.status(400).json({ message: "Le champ 'title' est obligatoire" })
    }

    const id = uuidv4()

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
  try {
    const { id } = req.params
    const { user_id, title, description, price, status } = req.body

    const result = await pool.query(
      `UPDATE missions SET user_id = $1, title = $2, description = $3, price = $4, status = $5
       WHERE id = $6 RETURNING *`,
      [user_id, title, description, price, status, id]
    )

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Mission not found à mettre à jour' })
    }

    res.json(result.rows[0])
  } catch (error: any) {
    console.error('Erreur dans updateMission:', error.message)
    res.status(500).json({ message: 'Erreur serveur dans updateMission' })
  }
}

// DELETE /missions/:id
export const deleteMission = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await pool.query('DELETE FROM missions WHERE id = $1', [id])

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Mission non trouvée à supprimer' })
    }

    res.status(204).send()
  } catch (error: any) {
    console.error('Erreur dans deleteMission:', error.message)
    res.status(500).json({ message: 'Erreur serveur dans deleteMission' })
  }
}
