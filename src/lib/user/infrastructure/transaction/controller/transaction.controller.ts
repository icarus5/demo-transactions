import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTransactionCommand } from 'src/lib/user/application/transaction/create/create-transaction.command';
import { CreateTransactionHandler } from 'src/lib/user/application/transaction/create/create-transaction.handlers';
import { GetAllTransactionHandler } from 'src/lib/user/application/transaction/get-all/get-all-transaction.handler';
import { Transaction } from 'src/lib/user/domain/transaction/transaction';
import { GetTransactionIdQuery } from '../../../application/transaction/get-id/get-transaction-id.query';
import { GetTransactionIdHandler } from '../../../application/transaction/get-id/get-transaction-id.handler';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly createTransactionHandler: CreateTransactionHandler,
    private readonly getTransactionHandler: GetAllTransactionHandler,
    private readonly getTransactionByIdHandler: GetTransactionIdHandler,
  ) {}

  @Post()
  async createTransaction(@Body() dto: Transaction) {
    const command = new CreateTransactionCommand(dto);
    return await this.createTransactionHandler.execute(command);
  }

  @Get()
  async getAllTransaction() {
    return this.getTransactionHandler.execute();
  }

  @Get(':id')
  async getTransactionById(@Param('id') id: string) {
    const query = new GetTransactionIdQuery(id);
    return this.getTransactionByIdHandler.execute(query);
  }
}
