import express from 'express'
import { helloWord } from './routes'

const app = express()

app.get('/', helloWord)

app.listen(2222, () => {
    console.log('😎️🦄️ Api iniciada...')
})