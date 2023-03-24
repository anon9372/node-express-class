const EventEmitter = require('events')

const customEmitter = new EventEmitter()

console.log('customeEmitter', customEmitter)

customEmitter.on('response', () => {
    console.log('Hello')
})

customEmitter.on('response', () => {
    console.log('Other logic')
})


customEmitter.emit('response')


// emite should be below only
// arguments can be passed in .emit which can be received in .on