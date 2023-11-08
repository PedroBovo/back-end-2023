const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World, sou pedro')
})
app.get('/oi', function(req, res) {
  res.send('ola, mundo')
})

app.listen(3000)
