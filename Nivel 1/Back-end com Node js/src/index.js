const express = require('express')
const app = express()
const { v4, validate } = require('uuid')
const cors = require('cors')

app.use(cors())
app.use(express.json())

/*
*Métodos HTTP
*
*GET: Buscar/Pegar informções do backend
*POST: Criar uma informação no backend
*PUT/PATH: Alterar uma informção no backend
*DELETE: Apagar/excluir uma informação do backend
*/

/**
 * Tipos de parâmetros
 * 
 * Query params: Principalmente para Filtros e Listagens
 * Route Params: Identificar recursos na hora de deletar/atualizar
 * Request body
 */

 /**
  * Middleware:
  * 
  * É um interceptador de requisição
  * - Interronpe totalmente a requisição
  * - Altera os dados da requisição
  */


const projects = []
 

function logRequest(req,res,next){
    const { method, url } = req

    const logLabel = `[${method.toUpperCase()}] ${url}`

    console.time(logLabel)
    next()
    console.timeEnd(logLabel)
}

// função que valida o id

function validateID(req,res,next){
    const {id} = req.params

    if(!validate(id)){
        return res.status(400).json({error: "ID not found"})
    }

    return next()
}

app.use(logRequest)
app.use('/projects/:id', validateID)
app.get('/projects', (req,res) => {
    // Filtro por title

    // const { title } = req.query
    // const results = title ? projects.filter(project => project.title.includes(title))
    // :projects

    return res.json(projects)
})

app.post('/projects', (req,res) => {

    const { title, owner} = req.body
    const project_requeste = {id:v4(),title,owner}
    projects.push(project_requeste)


    return res.json(project_requeste)
})

app.put('/projects/:id', (req,res) => {

    const { id } = req.params
    const { title, owner} = req.body
    const projectIndex = projects.findIndex(project => project.id == id)

    if(projectIndex < 0){
        return res.status(400).json({
            error: 'Project not found'
        })
    }

    const project_requeste = {
        id,
        title,
        owner
    }

    projects.splice(projectIndex,1,project_requeste)

    return res.json(projects)
})

app.delete('/projects/:id', (req,res) => {

    const { id } = req.params

    const projectIndex = projects.findIndex(project => project.id == id)

    projects.splice(projectIndex,1)

    return res.status(204).send()
})

app.listen(2222, () => {
    console.log('Api iniciada 😊️😃️')
})