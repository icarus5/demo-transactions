import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetAllUserHandler } from './user/get-all/get-all-user.handler';
import { User } from '../domain/user/user';
import { UserRepositoryPort } from '../domain/user/user.repository.port';
import { CreateUserHandler } from './user/create/create-user.handlers';
import { UserRepositoryAdapter } from '../infrastructure/user/persistence/user.repository.adapter';
import { GetUserIdHandler } from './user/get-id/get-user-id.handler';
import { GetUserDocumentHandler } from './user/get-document/get-user-document.handler';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: UserRepositoryPort,
      useClass: UserRepositoryAdapter,
    },
    CreateUserHandler,
    GetUserIdHandler,
    GetAllUserHandler,
    GetUserDocumentHandler
  ],
  exports: [
    CreateUserHandler,
    GetUserIdHandler,
    GetAllUserHandler,
    GetUserDocumentHandler,
    UserRepositoryPort, // Asegúrate de exportar UserRepositoryPort
  ],
})
export class CqrsModule {}
