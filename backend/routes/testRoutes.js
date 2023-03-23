const express = require('express')
const router = express.Router()
const {getFS, sampleAdd} = require('../controllers/testController')

router.get("/" , (req , res) => {
    res.send("This api is reserved for Call Transcript Testing")
})

router.get("/firestore" , getFS  )
router.post("/firestore/sampleadd" , sampleAdd)


module.exports = router