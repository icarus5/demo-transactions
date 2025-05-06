import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'src/lib/user/domain/transaction/transaction';
import { TransactionController } from '../controller/transaction.controller';
import { GetAllTransactionHandler } from 'src/lib/user/application/transaction/get-all/get-all-transaction.handler';
import { CqrsTransactionModule } from '../../../application/transaction/cqrs.transaction.module';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), CqrsTransactionModule],
  controllers: [TransactionController],
  providers: [GetAllTransactionHandler],
})
export class TransactionModule {}
