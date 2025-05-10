import { Transaction } from 'src/lib/user/domain/transaction/transaction';

export abstract class TransactionRepositoryPort {
  abstract findAll(): Promise<Transaction[]>;

  abstract findById(id: string): Promise<Transaction | null>;

  abstract findByUserId(id: string): Promise<Transaction[] | null>;

  abstract create(
    transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Transaction>;

  abstract update(
    id: string,
    transaction: Partial<Omit<Transaction, 'id'>>,
  ): Promise<Transaction | null>;

  abstract delete(id: string): Promise<void>;
}
