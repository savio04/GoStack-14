import { getCustomRepository } from 'typeorm'
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id:string){
    const TrasictionRepository = getCustomRepository(TransactionsRepository)

    const transaction = await TrasictionRepository.findOne({
      where: {id}
    })

    if(!transaction){
      throw new AppError('invalid id',400)
    }

    await TrasictionRepository.remove(transaction)
  }
}

export default DeleteTransactionService;
