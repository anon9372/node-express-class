// FS module file system

// 1) Sync 2) Async

const { readFile, writeFile, read } = require('fs')

console.log('Start the application')

readFile('./content/firstFile.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./content/secondFile.txt', 'utf8', (err, result) => {

        if (err) {
            console.log(err)
            return
        }

        const second = result

        writeFile('./content/new-write-async.txt', `New Async written file has ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Task completed')
        }
        )
    })
})
console.log('Starting next task')
