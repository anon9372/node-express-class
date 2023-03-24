const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

app.use([authorize, logger])
// MW are function that are executed during the req of the server, each MW has its own req and res
// ie: req > MiddleWare > res
// if we want to use the middleware specifically in a particular route then we do not use app.use, we just and also we can use app.use('/api', logger) 1st arg define the common route path 
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
