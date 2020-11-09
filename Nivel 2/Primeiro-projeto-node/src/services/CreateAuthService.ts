import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { Jwt } from '../config/authConfig'
import User from '../models/Users'

interface AuthRequest{
  email:string
  password:string
}

class CreateAuthService{

  public async excute({email, password}:AuthRequest){
    const UsersRepository = getRepository(User)

    const user = await UsersRepository.findOne({
      where: {email}
    })

    if(!user){
      throw new Error('incorrect email/password combinat')
    }

    const passwordMatch = await compare(password,user.password)

    if(!passwordMatch){
      throw new Error('incorrect email/password combinat')
    }

    const token = sign({},Jwt.secret, {
      subject: user.id,
      expiresIn: Jwt.expireIn,
    })

    return {user,token}
  }

}

export default CreateAuthService
