import express from 'express'
import { persone } from './persone.js'

const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Homepage</h1> <a href='/persone'>Torna alla homepage</a>")
})

app.get('/persone', (req, res) => {
  const persona = persone.map((p) => {
    const { nome, cognome, eta } = p
    return { nome, cognome, eta }
  })
  res.json(persona)
})

app.get('/persone/:id', (req, res) => {
  console.log(req.params)
  const { id } = req.params
  const persona = persone.find((p) => p.id === id)

  if (!persona) {
    return res.status(404).json({ messaggio: 'non trovato', code: 404 })
  }
  res.json(persona)
})

app.listen(3000)
