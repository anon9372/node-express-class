const express = require('express')

const app = express()

const { products, people } = require('./data')

// Creating api route
app.get('/', (req, res) => {
    res.send('<h1><a href="/api/v1/products">Home Page</a></h1>')
})

app.get('/api/v1/products', (req, res) => {

    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.status(200).json(newProducts)
    // res.send(products)
})

app.get('/api/v1/products/:productId', (req, res) => {
    const { productId } = req.params

    const singleProduct = products.find((product) => product.id === Number(productId))
    // console.log('productId', productId) 

    if (!singleProduct) {
        return res.status(404).send("product not found")
    }
    else {
        return res.json(singleProduct)
    }
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params)
    res.send('Hello Products')
})

app.listen(8800, () => {
    console.log('Server started at port 8800...')
})