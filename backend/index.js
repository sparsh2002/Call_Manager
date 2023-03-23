const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const router = require('./routes/index')

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
app.use(cookieParser())

app.use("/api" , router)


app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port no. ${PORT}`)
})
