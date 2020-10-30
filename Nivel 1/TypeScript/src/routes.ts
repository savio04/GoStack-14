import { Request, Response } from 'express'
import { createUsers  } from './services/createusers'

export const helloWord = (request: Request,response: Response) => {

    const user = createUsers({
         name: 'jose',
         email: 'Savioteste@gmail.com',
         password: '123456',
    })
    console.log(user)

    response.json({
        message: "hello world"
    })
}
