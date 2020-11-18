import TransactionsRepository from '../repositories/TransactionsRepository';
//import Transaction from '../models/Transaction';

interface RequestDTO{
  title:string;
  value:number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({title,value,type}:RequestDTO) {
    const transcrition = this.transactionsRepository.create({
      title,
      value,
      type
    })

    return transcrition

  }

}

export default CreateTransactionService;
