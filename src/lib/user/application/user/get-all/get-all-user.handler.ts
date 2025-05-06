import { Injectable } from '@nestjs/common';
import { IQueryHandler } from '../../base-query';
import { GetAllUsersQuery } from './get-all-user.query';
import { UserRepositoryPort } from 'src/lib/user/domain/user/user.repository.port';
import { User } from 'src/lib/user/domain/user/user';

@Injectable()
export class GetAllUserHandler
  implements IQueryHandler<GetAllUsersQuery, User[]>
{
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
