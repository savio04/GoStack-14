import { verify } from 'jsonwebtoken'
import { Jwt } from '@config/authConfig'
import AppError from '@shared/errors/AppError'
import { Request,Response,NextFunction } from 'express'


interface TokenDTO{
  iat:number
  exp:number
  sub: string
}


export default function ensureAuthticated(request:Request,response:Response,next:NextFunction){
    const authHeader = request.headers.authorization

    if(!authHeader){
        throw new AppError('JWT token not found',401)
    }


    const [,token] = authHeader.split(' ')
    try{
      const tokedecod = verify(token,Jwt.secret)
      const { sub } = tokedecod as TokenDTO

      request.user = {
        id:sub
      }
      return next()

    }catch{
      throw new AppError('Token ivalid',401)
    }
  }
