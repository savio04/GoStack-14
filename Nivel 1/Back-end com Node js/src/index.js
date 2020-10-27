const express = require('express')
const app = express()
const { v4 } = require('uuid')

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

app.use(express.json())

const projects = []

app.get('/projects', (req,res) => {
    // Filtro por title

    const { title } = req.query
    const results = title ? projects.filter(project => project.title.includes(title))
    :projects

    return res.json(results)
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