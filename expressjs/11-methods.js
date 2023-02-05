const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data which is used to parse data to the body
app.use(express.urlencoded({ extended: false }))
// parse json is used to parse the post response to json obj
app.use(express.json())

// GET

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// POST Regular
app.post('/login', (req, res) => {
    const { name, password } = req.body
    // console.log('hello Name', req.body) 
    if (name && password) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})


// POST JS
app.post('/api/people', (req, res) => {
    console.log('hello Name', req.body)
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
})


// PUT 
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    // check if the received params id is existing in the database
    // Once the id is matched with the existing data in database, we perform necessary actions.
    // if id does not match then send response stating the same.

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
})


// DELETE

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
})



app.listen(9800, () => {
    console.log('Server is listening on port 9800....')
})
