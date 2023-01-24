const http = require('http')

// console.log('http', http) 

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to Achivers IT')
    }
    else if (req.url === '/about') {
        res.end('This is about page.')
    }
    else {
        res.end(`
        <h1>Opps Content not found!</h1>
        <a href='/'>Back to home</a>
        `)
    }
})

server.listen(5900)

