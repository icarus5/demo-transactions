import { IQuery } from 'src/lib/user/application/base-query';

export class GetUserIdQuery implements IQuery {
  constructor(public readonly userId: string) {}
}
