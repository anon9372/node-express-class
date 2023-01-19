const http = require('http')
const { readFileSync } = require('fs')

// Get all the files
const homepage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo-white.png')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

// Create a server
const server = http.createServer((req, res) => {

    console.log('req.urls', req.url)
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homepage)
        res.end()
    }
    if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }

    if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    }


    if (req.url === '/logo-white.png') {
        res.writeHead(200, { 'content-type': 'text/png' })
        res.write(homeLogo)
        res.end()
    }

    if (req.url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
})


// Start a server
server.listen(8800)