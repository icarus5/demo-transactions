import { IQuery } from '../../base-query';

export class GetTransactionUserIdQuery implements IQuery {
  constructor(public readonly userId: string) {}


}
