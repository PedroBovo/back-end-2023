const express = require('express')
const app = express()

//Registrar um Middleware
//Indica que todas as requisições podem receber o body em JSON o Express aplica um JSON.parsepara o conteudo recebido
app.use(express.json())

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
        res.send(lista.filter(Boolean))
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

//Create - [Post] /item
app.post("/item", function (req,res) {
  //Extraimos o nome do Body da Requisição 
  const item = req.body.nome

  //Adicionamos o item recebido na lista
  lista.push(item)

  //exibimos uma mensagem de sucesso
  res.send("item adicionado com sucesso")
})

//Update -[PUT] /item/:id
app.put("/item/:id", function(req,res){
  //Obtemos o id com parametro de rota
  const id = req.params.id - 1
  //Trocamos o item da lista
  const novoItem = req.body.nome
  
  lista[id] = novoItem

  res.send("Item atualizado com sucesso")
})

//Delete -[DELETE] /item/:id
app.delete("/item/:id", function(req, res){
  //Obtemos o id com parametro de rota
    const id = req.params.id - 1

  //Removemos o item da lista
    delete lista[id]

    //exibimos uma mensagem de sucesso
    res.send("Item removido com sucesso")
})


app.listen(3000)
