import { Inject, Injectable } from '@nestjs/common';
import { CreateUserCommand } from './create-user.command';
import { User } from 'src/lib/user/domain/user/user';
import { UserRepositoryPort } from 'src/lib/user/domain/user/user.repository.port';
import { ICommandHandler } from '../../base-command';

@Injectable()
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommand, User>
{
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(command: CreateUserCommand): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(
      command.userData.email,
    );
    if (existingUser) {
      throw new Error('Email already registered');
    }

    return this.userRepository.create({
      ...command.userData,
      isActive: true,
    });
  }
}
