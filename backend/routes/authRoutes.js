const { signIn , signOut , login, signUp } = require('../controllers/authController')

const express = require('express')
const router = express.Router()

router.post('/signin' , signIn)
router.post('/signup' , signUp)
router.post('/login' , login)
router.post('/signout' , signOut)


module.exports = router