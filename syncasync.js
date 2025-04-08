import { readFile, readFileSync } from 'fs'
import { writeFileSync } from 'fs'

readFile('./cartella/prova.txt', 'utf8', (error, result) => {
  if (error) {
    console.log(error)
    return
  }
  const prova = result
  readFile('./cartella/prova.txt', 'utf8', (error, result) => {})
})

// const prova = readFileSync('./cartella/prova.txt', 'utf8')
// const ciao = readFileSync('./cartella/ciao.txt', 'utf8')

// writeFileSync('./cartella/prova.txt', 'appendo', { flag: 'a' })
