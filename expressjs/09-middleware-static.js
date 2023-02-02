const express = require('express')
const app = express()

let { people } = require('./data')

app.use(express.static('../methods-public'))



app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})



app.listen(9000, () => {
    console.log('App is running on port 9000...')
})