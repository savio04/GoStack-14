import { Router } from "express";
import CreateUserService from '../services/CreateUserService'
const users = Router()


users.post('/',async (request, response) => {
  try{
    const createUsersService = new CreateUserService
    const { name, email, password } = request.body

    const user = await createUsersService.excute({
      name,
      email,
      password
    })
    delete user.password

    return response.json(user)

  }catch(error){
    return response.status(400).json({
      error: `${error.message}`
    })
  }

})

export default users
