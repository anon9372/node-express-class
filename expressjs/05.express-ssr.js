const express = require('express')
const path = require('path')

// Create or Call express funtion
const app = express()

// setting up static route and middleware
app.use(express.static('./navbar-app'))



// Create Routes
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found!!!')
})

// Start Server
app.listen(8800, () => {
    console.log('Server started on port number 8800...')
})