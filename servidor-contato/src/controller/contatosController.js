const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {
let contato = request.body
let contatos = request.body.nome

contato.id=Math.random().toString(36).substr(-8)
console.log(contato)
}

const nome = (request, response) => {
  let contatos = request.body.nome
  
  if (model.agenda.contatos.nome === request.body.nome)
    response.status(400).send()
  else{ 
    (model.agenda.contatos.nome !== request.body.nome)
    response.status(200).send()
    model.agenda.contatos.push(contato)
  }
  console.log(contatos)
}

// {
// model.agenda.contatos.push(request.body)
// response.status(200).send()
// }

module.exports = {
  getAll,
  add, 
}