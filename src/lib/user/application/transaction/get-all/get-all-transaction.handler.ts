import { TransactionRepositoryPort } from 'src/lib/user/domain/transaction/transaction.repository.port';
import { Transaction } from 'src/lib/user/domain/transaction/transaction';
import { IQueryHandler } from '../../base-query';
import { GetAllTransactionQuery } from './get-all-transaction.query';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllTransactionHandler
  implements IQueryHandler<GetAllTransactionQuery, Transaction[]>
{
  constructor(
    private readonly transactionRepository: TransactionRepositoryPort,
  ) {}

  async execute(): Promise<Transaction[]> {
    return this.transactionRepository.findAll();
  }
}
