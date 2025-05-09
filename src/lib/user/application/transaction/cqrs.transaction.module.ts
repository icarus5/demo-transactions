import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from '../../domain/transaction/transaction';
import { TransactionRepositoryPort } from '../../domain/transaction/transaction.repository.port';
import { TransactionRepositoryAdapter } from '../../infrastructure/transaction/persistence/transaction.repository.adapter';
import { CreateTransactionHandler } from './create/create-transaction.handlers';
import { GetAllTransactionHandler } from './get-all/get-all-transaction.handler';
import { GetTransactionIdHandler } from './get-id/get-transaction-id.handler';
import { GetTransactionUserIdHandler } from './get-user-id/get-transaction-user-id.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  providers: [
    {
      provide: TransactionRepositoryPort,
      useClass: TransactionRepositoryAdapter,
    },
    CreateTransactionHandler,
    GetAllTransactionHandler,
    GetTransactionIdHandler,
    GetTransactionUserIdHandler,
  ],
  exports: [
    CreateTransactionHandler,
    GetAllTransactionHandler,
    GetTransactionIdHandler,
    GetTransactionUserIdHandler,
    TransactionRepositoryPort, // Asegúrate de exportar TransactionRepositoryPort
  ],
})
export class CqrsTransactionModule {}
