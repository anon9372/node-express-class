const express = require('express')
const app = express()

const peopleRouter = require('./routes/people')
const authRoute = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data which is used to parse data to the body
app.use(express.urlencoded({ extended: false }))
// parse json is used to parse the post response to json obj
app.use(express.json())


app.use('/api/people', peopleRouter)
app.use('/login', authRoute)

app.listen(9800, () => {
    console.log('Server is listening on port 9800....')
})
