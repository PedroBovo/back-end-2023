const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/oi', function(req, res) {
  res.send('ola, mundo')
})

const lista = ["Rick Sanchez", "Morty Smith", "Summer Smith"]
//                0               1               2


// Read all - [GET] /item/
app.get('/item', function (req, res){
        res.send(lista)
})

// Read by ID - [Get] /item/:id
app.get('/item/:id', function(req, res){

  // pegamos o id de rota e subtraimos -1 para ficar equivalente ao indice da lista que comeca em 0
  const id = req.params.id - 1

//acessamos o item na lista, usando o indice corrigido
  const item = lista[id]
  
//enviamos o item como resposta do endpoint
  res.send(item)
})



app.listen(3000)
