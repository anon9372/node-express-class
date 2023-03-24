const express = require('express')

const app = express()

const { products, people } = require('./data')

// Creating api route
// app.get('/', (req, res) => {
//     res.send('<h1><a href="/api/v1/products">Home Page</a></h1>')
// })
//===============  PARAMS  ======================

// app.get('/api/v1/products', (req, res) => {

//     const newProducts = products.map((product) => {
//         const { id, name, image } = product
//         return { id, name, image }
//     })

//     res.status(200).json(newProducts)
//     res.send(products)
// })

// app.get('/api/v1/products', (req, res) => {

//     const newProducts = products.map((product) => {
//         const { id, name, image } = product
//         return { id, name, image }
//     })

//     res.status(200).json(newProducts)
//     res.send(products)
// })

// app.get('/api/v1/products/1', (req, res) => {

//     const singleProduct = products.find((product) => product.id === 1)
//     // console.log('productId', productId) 

//      res.json(singleProduct)
// })


// app.get('/api/v1/products/:productId', (req, res) => {
//     const { productId } = req.params

//     const singleProduct = products.find((product) => product.id === Number(productId))
//     // console.log('productId', productId) 

//     if (!singleProduct) {
//         return res.status(404).send("product not found")
//     }
//     else {
//         return res.json(singleProduct)
//     }
// })

// COMPLEX PARAMS
// app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
//     console.log(req.params)
//     res.send('Hello Products')
// })

//===============  QUERY  ======================


// app.get('/api/v1/query', (req, res) => {
//     // console.log('This is the query', req.query)
//     // res.send('Query sent') 
//     const { search, limit } = req.query
//     let sortedProducts = [...products]

//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search)
//         })
//         // res.send(sortedProducts) 

//     }

//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }

//     if (sortedProducts.length < 1) {
//         res.status(200).send('No products found!!!')
//         // return res.status(200).json({ success: true, data: [] }) 
//     }

//     res.status(200).json(sortedProducts)

// })


app.get('/api/v1/products', (req, res) => {

    const { search, limit } = req.query
    let sortedData = [...products]


    if (search) {
        sortedData = sortedData.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedData = sortedData.slice(0, Number(limit))
    }

    if (sortedData.length < 1) {
        // return res.status(200).send("There are no products with your search")
        // or add return to remove the header error in terminal
        return res.status(200).json({ sucess: true, data: [] })
    }

    res.status(200).json(sortedData)

})



app.listen(8800, () => {
    console.log('Server started at port 8800...')
})