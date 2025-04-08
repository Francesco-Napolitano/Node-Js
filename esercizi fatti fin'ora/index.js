import saluta from './utils.js'
import nomi from './nomi.js'
import os from 'os'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

saluta(nomi.persona1)
saluta('Anna')
saluta(nomi.persona2)

//questi console.log danno informazioni sul computer che sto utilizzando
console.log(os.userInfo())
console.log(os.uptime())
console.log(os.version())

console.log('Sono un path.sep: ', path.sep)
const percorsoFile = path.join('/cartella', 'sottocartella', 'prova.txt')

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const percorsoAssoluto = path.resolve(
  __dirname,
  'cartella',
  'sottocartella',
  'prova.txt'
)

console.log(percorsoAssoluto)
