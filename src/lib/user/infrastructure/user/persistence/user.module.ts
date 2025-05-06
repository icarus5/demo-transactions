import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '../../../application/cqrs.module';
import { UserController } from '../../user/controller/user.controller';
import { GetAllUserHandler } from '../../../application/user/get-all/get-all-user.handler';
import { User } from 'src/lib/user/domain/user/user';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  controllers: [UserController],
  providers: [GetAllUserHandler], // Asegúrate de agregar aquí GetAllUserHandler
})
export class UserModule {}
