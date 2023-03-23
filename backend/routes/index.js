const express = require('express')
const router = express.Router()
const testRoutes = require('./testRoutes')

router.get("/" , (req , res) => {
    res.send("This api is reserved for Call Transcript App")
})

router.use("/test" , testRoutes)

module.exports = router