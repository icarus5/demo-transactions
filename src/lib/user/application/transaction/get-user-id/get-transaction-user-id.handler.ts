import { TransactionRepositoryPort } from '../../../domain/transaction/transaction.repository.port';
import { GetTransactionUserIdQuery } from './get-transaction-user-id.query';
import { IQueryHandler } from '../../base-query';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Transaction } from '../../../domain/transaction/transaction';

@Injectable()
export class GetTransactionUserIdHandler
  implements IQueryHandler<GetTransactionUserIdQuery, Transaction>
{
  constructor(
    private readonly transactionRepository: TransactionRepositoryPort,
  ) {}

  async execute(query: GetTransactionUserIdQuery): Promise<Transaction> {
    const { userId } = query;
    const transaction = await this.transactionRepository.findByUserId(
      query.userId,
    );
    if (!transaction) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return transaction;
  }
}
