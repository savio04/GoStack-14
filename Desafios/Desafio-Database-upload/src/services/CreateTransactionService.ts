import AppError from '../errors/AppError';
import {getCustomRepository,getRepository} from 'typeorm'
import TransactionsRepository from '../repositories/TransactionsRepository'
import Category from '../models/Category'

interface Request{
  title:string
  value:number
  type: 'income' | 'outcome'
  category:string
}

class CreateTransactionService {
  public async execute({title,value,type,category}:Request){
    const transictionRepository = getCustomRepository(TransactionsRepository)
    const categoryRepository = getRepository(Category)
    const {total} = await transictionRepository.getBalance()

    if(type === 'outcome' && total < value){
      throw new AppError('Saldo insuficiente', 400)
    }

    let findCategory = await  categoryRepository.findOne({
      where: {title:category}
    })

    if(!findCategory){
      findCategory = await categoryRepository.create({
        title:category
      })
      await categoryRepository.save(findCategory)
    }

    const transaction = await transictionRepository.create({
      title,
      value,
      type,
      category:findCategory
    })
    await transictionRepository.save(transaction)

    return transaction
  }
}

export default CreateTransactionService;
