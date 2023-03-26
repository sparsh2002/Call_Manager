const express = require('express')
const router = express.Router()
const testRoutes = require('./testRoutes')
const authRoutes = require('./authRoutes')
const zoomRoutes = require('./zoomRoutes')
router.get("/" , (req , res) => {
    res.send("This api is reserved for Call Transcript App")
})

router.use("/test" , testRoutes)
router.use("/auth" , authRoutes)
router.use("/zoom" , zoomRoutes)

module.exports = router