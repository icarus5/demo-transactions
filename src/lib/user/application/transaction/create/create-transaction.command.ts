import { Transaction } from 'src/lib/user/domain/transaction/transaction';
import { ICommand } from '../../base-command';

export class CreateTransactionCommand implements ICommand {
  constructor(public readonly transactionData: Transaction) {}
}
