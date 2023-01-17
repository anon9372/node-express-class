const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Req Event')
    res.end('Hello World')
})

server.listen(8800, () => {
    console.log('Server is lisiting on port 8800')
})