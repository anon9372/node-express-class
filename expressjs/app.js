const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

// app.use([logger, authorize]) 
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/profile', [logger, authorize], (req, res) => {
    console.log(req.user)
    res.send(req.user)
})


app.listen(9000, () => {
    console.log('The app is listening on port number 9000...')
})