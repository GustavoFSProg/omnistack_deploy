const app = require('./app')

const port = 5000
if (port == null || port == ' ') {
  port = 5000
}

app.listen(port)

console.log('API rodando na porta ' + port)
