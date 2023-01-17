
const { readFileSync, writeFileSync } = require('fs')
console.log('Start the application')

const firstFile = readFileSync('./content/firstFile.txt', 'utf8')
const secondFile = readFileSync('./content/secondFile.txt', 'utf8')

console.log(firstFile, secondFile)

writeFileSync('./content/first-write-sync.txt', `I have read ${firstFile}, ${secondFile} and written a new file.`)

console.log('Task completed')
console.log('Start next task')