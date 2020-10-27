const express = require('express')
const app = express()

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

app.get('/projects', (req,res) => {

    const {title} = req.query

    return res.json({
        title
    })
})

app.post('/projects', (req,res) => {

    const { title} = req.body

    return res.json({
        title
    })

    // return res.json({
    //     projeto1: 'martelo',
    //     projeto2: 'capivara',
    //     projeto3: 'estante'
    // })
})

app.put('/projects/:id', (req,res) => {

    const { id } = req.params

    return res.json({
        id
    })
    // return res.json({
    //     projeto1: 'martelo',
    //     projeto2: 'capivara',
    //     projeto3: 'estante',
    //     projeto4: 'projeto4'
    // })

})

app.delete('/projects/:id', (req,res) => {

    const { id } = req.params

    return res.json({
        id_delete: id
    })

    // return res.json({
    //     projeto1: 'martelo',
    //     projeto2: 'capivara',
    //     projeto3: 'estante',
    // })

})

app.listen(2222, () => {
    console.log('Api iniciada 😊️😃️')
})