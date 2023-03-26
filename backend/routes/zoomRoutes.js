const express = require('express')
const router = express.Router()
const {getCallLogsByUserId, getUserIdByEmail, createUser, getUsers, createMeeting} = require('../controllers/zoomController')

router.get("/get-call-log-by-user-id" , getCallLogsByUserId)
router.get("/get-userid-by-email" , getUserIdByEmail)
router.post("/create-user" , createUser)
router.get("/get-users", getUsers)
router.post("/create-meeting" , createMeeting)

module.exports = router