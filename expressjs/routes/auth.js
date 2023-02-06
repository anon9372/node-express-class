const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
    const { name, password } = req.body
    // console.log('hello Name', req.body) 
    if (name && password) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})


module.exports = router