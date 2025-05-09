import { Injectable } from '@nestjs/common';
import { TransactionRepositoryPort } from 'src/lib/user/domain/transaction/transaction.repository.port';
import { Repository } from 'typeorm';
import { Transaction } from 'src/lib/user/domain/transaction/transaction';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionRepositoryAdapter implements TransactionRepositoryPort {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  findById(id: string): Promise<Transaction | null> {
    return this.transactionRepository.findOneBy({ id });
  }

  findByUserId(userId: string): Promise<Transaction | null> {
    return this.transactionRepository.findOneBy({ userId });
  }

  async create(
    transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Transaction> {
    console.log(JSON.stringify(transaction));
    return this.transactionRepository.save(transaction);
  }

  async update(
    id: string,
    transaction: Partial<Omit<Transaction, 'id'>>,
  ): Promise<Transaction | null> {
    await this.transactionRepository.update(id, transaction);
    return this.findById(id);
  }

  delete(id: string): Promise<void> {
    return this.transactionRepository.delete(id).then(() => undefined);
  }
}
