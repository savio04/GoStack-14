import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import AppError from '../../../shared/errors/AppError'
import User from '../../../modules/users/entities/Users'

interface UserRequest{
  name:string
  email:string
  password:string
}

class CreateUserService{

  public async excute({name,email, password}:UserRequest){
    const Usersrepository = getRepository(User)

    const findEmail = await Usersrepository.findOne({
      where: {email}
    })

    if(findEmail){
      throw new AppError('existing email',400)
    }
    const passworHash = await hash(password, 10)

    const user = await Usersrepository.create({
      name,
      email,
      password: passworHash
    })

    await Usersrepository.save(user)

    return user

  }

}

export default CreateUserService
