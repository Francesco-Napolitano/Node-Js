import express from 'express'
import { persone } from '../persone.js'

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

// app.get('/persone/:id', (req, res) => {
//   console.log(req.params)
//   const { id } = req.params
//   const persona = persone.find((p) => p.id === id)

//   if (!persona) {
//     return res.status(404).json({ messaggio: 'non trovato', code: 404 })
//   }
//   res.json(persona)
// })

app.get('/persone/search', (req, res) => {
  const { query, limit } = req.query
  let personeFiltrate = [...persone]
  if (query) {
    personeFiltrate = personeFiltrate.filter((p) => {
      return p.nome.startsWith(query)
    })
  }
  if (limit) {
    personeFiltrate = personeFiltrate.slice(0, Number(limit))
  }

  if (personeFiltrate.length < 1)
    return res.status(200).json({ success: true, data: [] })

  res.status(200).json(personeFiltrate)
})

app.listen(3000)
