const express = require('express')
const router = express.Router()
const {getCallLogsByUserId} = require('../controllers/zoomController')

router.post("/get-call-log-by-user-id" , getCallLogsByUserId)


module.exports = router