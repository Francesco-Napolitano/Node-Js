import express from 'express'
import { persone } from '../persone.js'

export const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ data: persone, success: true })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const persona = persone.find((p) => p.id === id)
  res.json({ success: true, data: persona })
})

router.post('/', (req, res) => {
  console.log(req.body)
  const persona = req.body
  persone.push(persona)
  res.status(200).json({ success: true, data: persone })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const persona = req.body
  persone[Number(id - 1)] = persona
  res.status(200).json({ success: true, data: persone })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const index = persone.findIndex((p) => p.id === id)
  persone.splice(index, 1)
  res.status(200).json({ success: true, data: persone })
})
