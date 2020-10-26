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

app.use(express.json())

app.get('/projects', (req,res) => {
    return res.json({
        projeto1: 'martelo',
        projeto2: 'capivara'
    })
})

app.post('/projects', (req,res) => {
    return res.json({
        projeto1: 'martelo',
        projeto2: 'capivara',
        projeto3: 'estante'
    })
})

app.put('/projects/:id', (req,res) => {

    return res.json({
        projeto1: 'martelo',
        projeto2: 'capivara',
        projeto3: 'estante',
        projeto4: 'projeto4'
    })

})

app.delete('/projects/:id', (req,res) => {

    return res.json({
        projeto1: 'martelo',
        projeto2: 'capivara',
        projeto3: 'estante',
    })

})

app.listen(2222, () => {
    console.log('Api iniciada 😊️😃️')
})