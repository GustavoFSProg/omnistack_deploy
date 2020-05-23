const routes = require('./routes')
const express = require('express')

const app = express()

app.use(express.json({}))
app.use(routes)

app.listen(3000)

console.log('API rodando na porta 3001')

// export default app

module.exports = app
