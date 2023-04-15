const express = require('express')
const { addUser } = require('../controllers/firestoreController')
const router = express.Router()


router.post('/add-user' , addUser)

module.exports = router