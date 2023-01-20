const express = require('express')
const { products } = require('./data')
const app = express()


// Create a api
app.get('/products', (req, res) => {
    res.status(201).json(products)
    console.log(products)
    // res.status(200) 
})


// start the server
app.listen(8800, () => {
    console.log('Server started on port numner 8800...')
})
