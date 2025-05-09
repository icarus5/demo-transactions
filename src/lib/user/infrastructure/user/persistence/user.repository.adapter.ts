import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/lib/user/domain/user/user';
import { UserRepositoryPort } from 'src/lib/user/domain/user/user.repository.port';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryAdapter implements UserRepositoryPort {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: string): Promise<User | null> {
    console.log('findById', id);
    return this.userRepository.findOneBy({ id });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  async create(
    user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(
    id: string,
    user: Partial<Omit<User, 'id'>>,
  ): Promise<User | null> {
    await this.userRepository.update(id, user);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    return this.userRepository.delete(id).then(() => undefined);
  }

  async findByDocument(document: string): Promise<User | null> {
    return this.userRepository.findOneBy({ document });
  }
}
