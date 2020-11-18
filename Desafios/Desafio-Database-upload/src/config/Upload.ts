import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const pathTemp = path.resolve(__dirname, '..', '..', 'tmp')

export default{
  directory: pathTemp,

  storage: multer.diskStorage({
    destination: pathTemp,
    filename: (request,file,callback) => {
      const Hash = crypto.randomBytes(10).toString('HEX')
      const filename = `${Hash}-${file.originalname}`

      return callback(null,filename)
    }
  })
}
