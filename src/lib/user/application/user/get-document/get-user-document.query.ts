import { IQuery } from '../../base-query';

export class GetUserDocumentQuery implements IQuery {
  constructor(public readonly document: string) {}
}
