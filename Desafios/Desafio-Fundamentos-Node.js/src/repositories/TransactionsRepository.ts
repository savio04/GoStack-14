import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface CreatedTrancritionDTO{
  title:string;
  value:number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];
  private balance:Balance

  constructor() {
    this.transactions = [];
    this.balance = {
      income: 0,
      outcome: 0,
      total: 0
    }
  }

  public all(){
    return this.transactions
  }

  public getBalance() {
    return this.balance
  }

  public create({title,value,type}:CreatedTrancritionDTO) {

    if(type === 'outcome' && this.balance.total < value){
      throw Error('Saldo insuficiente')
    }

    const transaction = new Transaction({
      title,
      value,
      type
    })

    this.transactions.push(transaction)

    this.balance.income = this.transactions.reduce((acumulador,transaction) => (
      transaction.type === 'income' ? acumulador + transaction.value:
        this.balance.income
    ),0)

    this.balance.outcome = this.transactions.reduce((acumulador,transaction) => (
      transaction.type === 'outcome' ? acumulador + transaction.value:
        this.balance.outcome
    ),0)

    this.balance.total = this.balance.income - this.balance.outcome

    return transaction
  }
}

export default TransactionsRepository;
