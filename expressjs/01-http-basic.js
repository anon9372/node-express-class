const http = require('http')

// Creating a server
const server = http.createServer((req, res) => {

    const url = req.url

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Home Page</h1>')
        res.end()
    }

    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>This is about page</h1>')
        res.end()
    }

    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page Not Found </h1>')
        res.end()
    }
})


// Starting a server
server.listen(5600)

