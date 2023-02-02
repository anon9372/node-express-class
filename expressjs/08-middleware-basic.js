const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

app.use([authorize, logger])
// if we want to use the middleware specifically in a particular route then we do not use app.use, we just
// pass the middleware to the app.get as a argument.

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

// app.get('/api/profile', authorize, (req, res) => {
//     console.log(req.user)
//     res.send('Profile')
// })

// app.get('/api/profile', [authorize, logger], (req, res) => {
//     console.log(req.user)
//     res.send('Profile')
// })
app.get('/api/profile', (req, res) => {
    console.log(req.user)
    res.send('Profile')
})


app.listen(9000, () => {
    console.log('The app is listening on port number 9000...')
})
