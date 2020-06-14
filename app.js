const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')
const dotenv = require('dotenv')
const { errors } = require('celebrate')

dotenv.config()

const app = express()

app.use('/', routes)
app.use(express.json())
app.use(cors())

const { PORT } = process.env

const server = require('http').Server(app)

server.listen(PORT)

console.log(`API Running at port ${PORT}`)

module.exports = app
