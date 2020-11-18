import { EntityRepository, Repository } from 'typeorm';
import AppError from '../errors/AppError'

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance():Promise<Balance>{
    const transactions = await this.find()


    const {income, outcome} = transactions.reduce((acumulator, transaction) => {
      switch(transaction.type){
        case 'income':
          acumulator.income += transaction.value
          break;
        case 'outcome':
          acumulator.outcome += transaction.value
          break;
        default:
          break;
        }
        return acumulator
    },{
      income: 0,
      outcome: 0,
      total: 0
    })

    const total = income - outcome

    if(total<0){
      throw new AppError('Saldo insuficiente',400)
    }

    return {
      income,
      outcome,
      total
    }
  }
}

export default TransactionsRepository;
