import { IQueryHandler } from '../../base-query';
import { GetUserDocumentQuery } from './get-user-document.query';
import { User } from '../../../domain/user/user';
import { UserRepositoryPort } from '../../../domain/user/user.repository.port';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserDocumentHandler
  implements IQueryHandler<GetUserDocumentQuery, User>
{
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(query: GetUserDocumentQuery): Promise<User> {
    const user = await this.userRepository.findByDocument(query.document);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
