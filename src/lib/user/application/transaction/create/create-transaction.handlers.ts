import { Transaction } from 'src/lib/user/domain/transaction/transaction';
import { ICommandHandler } from '../../base-command';
import { CreateTransactionCommand } from './create-transaction.command';
import { Injectable } from '@nestjs/common';
import { TransactionRepositoryPort } from 'src/lib/user/domain/transaction/transaction.repository.port';

@Injectable()
export class CreateTransactionHandler
  implements ICommandHandler<CreateTransactionCommand, Transaction>
{
  constructor(
    private readonly transactionRepository: TransactionRepositoryPort,
  ) {}

  async execute(command: CreateTransactionCommand): Promise<Transaction> {
    return this.transactionRepository.create({
      ...command.transactionData,
    });
  }
}
