const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {
let contato = request.body
let contato = request.body.nome

contato.id=Math.random().toString(36).substr(-8)
console.log(contato)

const nome = (request, response) => {
  let contato = request.body.nome
  
  if (model.agenda.contatos.nome != model.agenda.contatos.nome ) {
    response.status(200).send()
    model.agenda.contatos.push(contato)
  }else{ 
    response.status(404).send()
  }
  console.log(contato)
}


model.agenda.contatos.push(request.body)
response.status(200).send()
}

module.exports = {
  getAll,
  add
}

