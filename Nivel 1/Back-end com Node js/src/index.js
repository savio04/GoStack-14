const express = require('express')
const app = express()

app.get('/', (req,res) => {
    return res.json({
        message: "ola teste"
    })
})

app.listen(2222, () => {
    console.log('Api iniciada 😊️😃️')
})