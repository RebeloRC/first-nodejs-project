const express = require('express')

const app = express()

app.use(express.json())

/**
 * GET - Buscar um informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação especifica
 * DELETE - Deletar uma informação no servidor
 *
 * Tipose de parâmetros
 *
 * Route Params => Idenfitificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => objetos inserção/alteração (JSON)
 */

app.get('/courses', (request, response) => {
  return response.json(['Curso 1', 'Curso 2', 'Curso 3'])
})

app.post('/courses', (request, response) => {
  const body = request.body
  console.log(body)
  return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 5'])
})

app.put('/courses/:id', (request, response) => {
  const { id } = request.params
  console.log(id)
  return response.json(['Curso 6', 'Curso 7', 'Curso 3'])
})

app.patch('/courses/:id', (request, response) => {
  return response.json(['Curso 6', 'Curso 7', 'Curso 3'])
})

app.delete('/courses/:id', (request, response) => {
  return response.json(['Curso 6', 'Curso 7'])
})

app.listen(3333)
