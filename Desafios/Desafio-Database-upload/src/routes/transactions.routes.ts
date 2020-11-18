import { getCustomRepository } from 'typeorm';
import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

import multer from 'multer'
import uploadConfig from '../config/Upload'

const upload = multer(uploadConfig)

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  const TrasactionRepo = getCustomRepository(TransactionsRepository)
  const transactions = await TrasactionRepo.find()
  const balance = await TrasactionRepo.getBalance()

  response.json({
    transactions,
    balance
  })
});

transactionsRouter.post('/', async (request, response) => {
  const {title,value,type,category} = request.body

  const createTransaction = new CreateTransactionService

  const transaction = await createTransaction.execute({
    title,
    value,
    type,
    category
  })

  response.json(transaction)
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params
  const DeleteTransaction = new DeleteTransactionService

  await DeleteTransaction.execute(id)

  return response.status(204).send()
});


transactionsRouter.post('/import',upload.single('file'),async (request, response) => {
  const importTransaction = new ImportTransactionsService

  const transaction = await importTransaction.execute(request.file.path)

  return response.json(transaction)
});

export default transactionsRouter;
