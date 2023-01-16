const { readFile, writeFile } = require('fs')

console.log('Started 1st task')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    }
    console.log(result)
    console.log('Completed 1st task')
})

console.log('Starting next task')