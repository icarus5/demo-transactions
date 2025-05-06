import { GetTransactionIdQuery } from './get-transaction-id.query';
import { IQueryHandler } from '../../base-query';
import { Transaction } from '../../../domain/transaction/transaction';
import { TransactionRepositoryPort } from '../../../domain/transaction/transaction.repository.port';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class GetTransactionIdHandler
  implements IQueryHandler<GetTransactionIdQuery, Transaction>
{
  constructor(
    private readonly transactionRepository: TransactionRepositoryPort,
  ) {}

  async execute(query: GetTransactionIdQuery): Promise<Transaction> {
    const transaction = await this.transactionRepository.findById(
      query.transactionId,
    );
    if (!transaction) {
      throw new NotFoundException(
        `Transaction with ID ${query.transactionId} not found`,
      );
    }
    return transaction;
  }
}
