import express from 'express'
import { middlewareProva } from './middlewareProva.js'
import { authMiddleware } from './authMiddleware.js'
import { persone } from './persone.js'

const app = express()

app.get('/api/persone', (req, res) => {
  res.status(200).json({ data: persone, success: true })
})

app.get('/api/persone/:id', (req, res) => {
  const { id } = req.params
  const persona = persone.find((p) => p.id === id)
  res.json(persona)
})

app.listen(3000)
