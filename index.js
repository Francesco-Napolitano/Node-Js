import express from 'express'
import { middlewareProva } from './middlewareProva.js'
import { authMiddleware } from './authMiddleware.js'

const app = express()
app.use([middlewareProva, authMiddleware])
app.use(express.static('/public'))

app.get('/', (req, res) => {
  res.send('Homepage')
})

app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/about/dettagli', (req, res) => {
  res.send('About + dettagli')
})

app.listen(3000)
