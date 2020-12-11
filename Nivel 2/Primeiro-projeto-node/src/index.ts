import 'reflect-metadata'

import express, {Request,Response,NextFunction} from 'express'
import 'express-async-errors'

import routes from './routes/index'
import uploadConfig from './config/upload'
import './database'
import AppError from './errors/AppError'

const app = express()

app.use(express.json())
app.use('/files', express.static(uploadConfig.directory))
app.use(routes)

app.use((error:Error,request:Request,response:Response,next:NextFunction) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      message: `${error.message}`
    })
  }

  console.error(error)

  return response.status(500).json({
    message: "internal server error"
  })
})


app.listen(2222, () => {
  console.log('Api iniciada...');
})
