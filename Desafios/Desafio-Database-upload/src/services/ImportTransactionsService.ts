import { getRepository, In,getCustomRepository, TransactionManager } from 'typeorm'
import Category from '../models/Category'
import csvParse from 'csv-parse'
import fs from 'fs'
import TransactionsRepository from '../repositories/TransactionsRepository'


interface cvsTransaction{
  title:string
  value:number
  type: 'income' | 'outcome'
  category:string
}

class ImportTransactionsService {
  async execute(filepath:string){
    const categoryRepository = getRepository(Category)
    const transictionRepository = getCustomRepository(TransactionsRepository)
    const constactReaderStrin = fs.createReadStream(filepath)

    const parsers = csvParse({
      from_line: 2
    })

    const parseCSv = constactReaderStrin.pipe(parsers)

    const transactions: cvsTransaction[] = []
    const categories: string[] = []

    parseCSv.on('data', line => {
      const [title,type,value,category] = line.map((cell:string) => cell.trim())

      if(!title || !type || !value)return

      categories.push(category)

      transactions.push({
        title,
        type,
        value,
        category
      })
    })

    await new Promise(resolve => parseCSv.on('end', resolve))


    const exitingCategory = await categoryRepository.find({
      where: {
        title: In(categories)
      }
    })

    const existingCategoryTitles = exitingCategory.map(category => category.title)

    const addCategoryTitle = categories.filter(
      category => !existingCategoryTitles.includes(category)
    ).filter((value,index,self) => self.indexOf(value) === index)

    const newCategory = categoryRepository.create(
      addCategoryTitle.map(title => ({
        title,
      }))
    )

    await categoryRepository.save(newCategory)

    const finalCategories = [...newCategory,...exitingCategory]

    const transactionsCreat = transictionRepository.create(
      transactions.map(transaction => ({
        title:transaction.title,
        type: transaction.type,
        value:transaction.value,
        category: finalCategories.find(
          category => category.title === transaction.category
        )

      }))
    )

    await transictionRepository.save(transactionsCreat)

    await fs.promises.unlink(filepath)

    return transactionsCreat
  }
}

export default ImportTransactionsService;
