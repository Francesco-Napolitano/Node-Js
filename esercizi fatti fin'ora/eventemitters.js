import EventEmitter from 'events'

const customEmitter = new EventEmitter()

customEmitter.on('messaggio', () => {
  console.log('sono partito')
})
customEmitter.on('messaggio', (nome, anno) => {
  console.log(`Ciao sono ${nome} e siamo nel ${anno}`)
})

customEmitter.emit('messaggio', 'Francesco', 2025)
