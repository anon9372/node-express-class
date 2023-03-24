const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const text = fs.readFileSync('./content/bigFile.txt', 'utf8')
    res.end(text)

    // Refactoring the above code to streams:

    // const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8')
    // fileStream.on('open', (res) => {
    //     fileStream.pipe(res)
    // })

    // fileStream.on('error', (err) => {
    //     res.end(err)
    // })

}).listen(6900)


/// HTTP EXAMPLE

const { createReadStream } = require('fs')
const stream = createReadStream('./content/big.txt')
I
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) controls the size of the file chunk
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
stream.on('data', (result) => { console.log(result) })

stream.on('error', (err) => console.log(err))