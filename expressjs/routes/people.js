const express = require('express')
const router = express.Router()

const {
    getPeople,
    postPeople,
    postPeoplePostman,
    putPeople,
    deletePeople
} = require('../controllers/people')

// GET
// router.get('/', getPeople)

// // POST JS
// router.post('/', postPeople)
// router.post('/postman', postPeoplePostman)

// // PUT 
// router.put('/:id', putPeople)

// // DELETE
// router.delete('/:id', deletePeople)

router.route('/').get(getPeople).post(postPeople)
router.route('/postman').post(postPeoplePostman)
router.route('/:id').put(putPeople).delete(deletePeople)


module.exports = router

