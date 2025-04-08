import http from 'http'

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('benvenuto sul sito')
    return
  }
  if (req.url === '/francesco') {
    res.end('il profilo di francesco')
    return
  }
  res.end(`
   <h1>Errore</h1>
   <p>Torna alla <a href="/"> home</a> </p>
   `)
})

server.listen(3000)
