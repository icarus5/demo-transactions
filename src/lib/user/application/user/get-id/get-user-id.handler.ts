import { UserRepositoryPort } from 'src/lib/user/domain/user/user.repository.port';
import { Injectable } from '@nestjs/common';
import { User } from 'src/lib/user/domain/user/user';
import { IQueryHandler } from 'src/lib/user/application/base-query';
import { GetUserIdQuery } from './get-user-id.query';

@Injectable()
export class GetUserIdHandler implements IQueryHandler<GetUserIdQuery, User> {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(query: GetUserIdQuery): Promise<User> {
    console.log(JSON.stringify(query.userId));
    const user = await this.userRepository.findById(query.userId);
    console.log(JSON.stringify(user));
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
