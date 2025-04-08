import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Benvenuto nella home')
  return
})

app.get('/about', (req, res) => {
  res.send(`<h1>About</h1>`)
})

app.all('*', (req, res) => {
  res.send(`<h1>Risorsa non trovata</h1>`)
  return
})

app.listen(3000)
