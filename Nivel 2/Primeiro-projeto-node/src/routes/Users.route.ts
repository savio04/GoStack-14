import { Router } from "express";
import CreateUserService from '../services/CreateUserService'
import ensureAuthticated from '../middlewares/ensureAtuheticated'
import UpdateUsersAvatarService from '../services/UpdateUsersAvatarService'
import multer from 'multer'
import UploadConfig from '../config/upload'
const users = Router()
const upload = multer(UploadConfig)

users.post('/',async (request, response) => {
  const createUsersService = new CreateUserService
  const { name, email, password } = request.body

  const user = await createUsersService.excute({
    name,
    email,
    password
  })
  delete user.password

  return response.json(user)

})

users.patch('/avatar',ensureAuthticated, upload.single('avatar'), async (request,response) => {
  const UpdateUsersAvatar = new UpdateUsersAvatarService()
    const user = await UpdateUsersAvatar.excute({
      user_id: request.user.id,
      avatarFilename: request.file.filename
    })

    delete user.password

    return response.status(200).json(user)
})
export default users
