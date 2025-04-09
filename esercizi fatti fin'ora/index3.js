import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('homepage.html', { root: __dirname + '/public' })
})

app.get('/about', (req, res) => {
  res.send(`<h1>About</h1>`)
})

app.all('*', (req, res) => {
  res.send(`<h1>Risorsa non trovata</h1>`)
})

app.listen(3000)
