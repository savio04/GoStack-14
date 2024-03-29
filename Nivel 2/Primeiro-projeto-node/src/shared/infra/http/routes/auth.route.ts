import { Router } from 'express'
import CreateAuthService from '@modules/users/services/CreateAuthService'
const AuthRoute = Router()


AuthRoute.post('/', async(request,response) => {
  const AuthService = new CreateAuthService()
  const {email, password} = request.body

  const {user,token} = await AuthService.excute({
    email,
    password
  })
  delete user.password

  return response.json({
    user:user,
    token:token
  })
})


export default AuthRoute
