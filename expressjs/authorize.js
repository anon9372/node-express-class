const authorize = (req, res, next) => {

    const { user } = req.query;
    if (user === 'anil') {
        req.user = { name: 'anil', id: 3, age: 29 }
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize