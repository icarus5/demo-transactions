import { User } from './user';

export abstract class UserRepositoryPort {
  abstract findAll(): Promise<User[]>;

  abstract findById(id: string): Promise<User | null>;

  abstract findByEmail(email: string): Promise<User | null>;

  abstract create(
    user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User>;

  abstract update(
    id: string,
    user: Partial<Omit<User, 'id'>>,
  ): Promise<User | null>;

  abstract delete(id: string): Promise<void>;

  abstract findByDocument(document: string): Promise<User | null>;
}
