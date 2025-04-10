import express from 'express'
import { middlewareProva } from './middlewareProva.js'
import { authMiddleware } from './authMiddleware.js'
import { persone } from './persone.js'

const app = express()

app.use(express.json())

app.get('/api/persone', (req, res) => {
  res.status(200).json({ data: persone, success: true })
})

app.get('/api/persone/:id', (req, res) => {
  const { id } = req.params
  const persona = persone.find((p) => p.id === id)
  res.json({ success: true, data: persona })
})

app.post('/api/persone', (req, res) => {
  console.log(req.body)
  const persona = req.body
  persone.push(persona)
  res.status(200).json({ success: true, data: persone })
})

app.put('/api/persone/:id', (req, res) => {
  const { id } = req.params
  const persona = req.body
  persone[Number(id - 1)] = persona
  res.status(200).json({ success: true, data: persone })
})

app.delete('/api/persone/:id', (req, res) => {
  const { id } = req.params
  const index = persone.findIndex((p) => p.id === id)
  persone.splice(index, 1)
  res.status(200).json({ success: true, data: persone })
})

app.listen(3000)
