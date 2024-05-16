require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const handlingWrong = require('./middlewares/handlingWrong')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(require('./routes'))
app.use(handlingWrong)


module.exports = app