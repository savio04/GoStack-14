import { getRepository } from 'typeorm'
import User from '../../../modules/users/entities/Users'
import path from 'path'
import fs from 'fs'
import uploadConfig from '../../../config/upload'
import AppError from '../../../shared/errors/AppError'


interface Request{
  user_id:string
  avatarFilename:string
}

class UpdateUsersAvatarService{
  public async excute({user_id,avatarFilename}:Request){
    const userRepository = getRepository(User)

    const userVerify = await userRepository.findOne(user_id)

    if(!userVerify){
      throw new AppError('Only autheticated users can change avatar',401)
    }

    if(userVerify.avatar){
      //Deletar o avatar anterior

      const usersAvatarFilePath = path.join(uploadConfig.directory,userVerify.avatar)
      const usersAvtarExists = fs.promises.stat(usersAvatarFilePath)

      if(usersAvtarExists){
        await fs.promises.unlink(usersAvatarFilePath)
      }
    }

    userVerify.avatar = avatarFilename

    await userRepository.save(userVerify)

    return userVerify
  }
}


export default UpdateUsersAvatarService
