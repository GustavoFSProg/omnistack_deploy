const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const routes = require('./routes')
const path = require('path')

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const { PORT } = process.env

const server = require('http').Server(app)

app.use('/', routes)

server.listen(PORT)

console.log(`API Running at port ${PORT}`)
