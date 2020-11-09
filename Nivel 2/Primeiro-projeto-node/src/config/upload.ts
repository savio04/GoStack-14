import path from 'path'
import multer from 'multer'
import crypto from 'crypto'

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'temp'),
    filename(request,file,callback){
      const Hash = crypto.randomBytes(10).toString('hex')
      const filename = `${Hash}-${file.originalname}`

      return callback(null,filename)
    }
  })
}
