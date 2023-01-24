const EventEmitter = require('events')

const customEmitter = new EventEmitter()

console.log('customeEmitter', customEmitter)

customEmitter.on('response', () => {
    console.log('Hello')
})

customEmitter.emit('response')