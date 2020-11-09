import { Router } from 'express'
import CreateAuthService from '../services/CreateAuthService'
const AuthRoute = Router()


AuthRoute.post('/', async(request,response) => {
  try{
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

  }catch(error){
    return response.status(400).json({
      Error: `${error.message}`
    })
  }
})


export default AuthRoute
