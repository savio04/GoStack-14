import { Router } from 'express'

const routes = Router()

routes.get('/', (request,response) => {
  response.json({
    message: "Hello world"
  })
})

routes.post('/',(request,response) => {
  const {name,email,password} = request.body

  const user = {
    name,
    email,
    password
  }
  response.json(user)

})

export default routes
