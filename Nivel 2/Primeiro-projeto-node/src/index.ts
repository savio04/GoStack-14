import express from 'express'
import routes from './routes/index'
import './database'

const app = express()

app.use(express.json())
app.use(routes)


app.listen(2222, () => {
  console.log('Api iniciada...');
})
