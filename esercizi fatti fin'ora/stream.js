import { createReadStream, readFileSync } from 'fs'
import Stream from 'stream'

const filegrande = readFileSync('./filegrande.txt', 'utf8')
const stream = createReadStream('./filegrande.txt')

stream.on('data', (result) => {
  console.log(result)
})
