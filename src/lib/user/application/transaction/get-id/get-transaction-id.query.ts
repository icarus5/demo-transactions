import { IQuery } from '../../base-query';

export class GetTransactionIdQuery implements IQuery {
  constructor(public readonly transactionId: string) {}
}
