import { Router } from "express";
import CreateUserService from '../services/CreateUserService'
import ensureAuthticated from '../middlewares/ensureAtuheticated'
import multer from 'multer'
import UploadConfig from '../config/upload'
const users = Router()
const upload = multer(UploadConfig)

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

users.patch('/avatar',ensureAuthticated, upload.single('avatar'), (request,response) => {
  console.log(request.file)
  return response.json({message: true})
})
export default users
