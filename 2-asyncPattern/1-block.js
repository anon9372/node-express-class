const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }

    if (req.url === '/about') {

        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
    res.end('ERROR')

})

server.listen(8800, () => {
    console.log('Hi, im server and im listening!')
})