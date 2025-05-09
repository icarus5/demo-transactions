// src/user/infrastructure/controllers/user.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { GetAllUserHandler } from 'src/lib/user/application/user/get-all/get-all-user.handler';
import { CreateUserCommand } from 'src/lib/user/application/user/create/create-user.command';
import { CreateUserHandler } from 'src/lib/user/application/user/create/create-user.handlers';
import { CreateUserDto } from '../../../domain/user/user-dto';
import { GetUserIdHandler } from 'src/lib/user/application/user/get-id/get-user-id.handler';
import { GetUserIdQuery } from 'src/lib/user/application/user/get-id/get-user-id.query';
import { GetUserDocumentHandler } from '../../../application/user/get-document/get-user-document.handler';
import { GetUserDocumentQuery } from '../../../application/user/get-document/get-user-document.query';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserHandler: CreateUserHandler,
    private readonly getUserHandler: GetAllUserHandler,
    private readonly getUserByIdHandler: GetUserIdHandler, //
    private readonly getUserByDocumentHandler: GetUserDocumentHandler, //
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const command = new CreateUserCommand(dto);
    return this.createUserHandler.execute(command);
  }

  @Get()
  async getAll() {
    //const query = new GetAllUsersQuery();
    return this.getUserHandler.execute();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const query = new GetUserIdQuery(id);
    return this.getUserByIdHandler.execute(query);
  }

  @Get('/document/:document')
  async getByDocument(@Param('document') document: string) {
    const query = new GetUserDocumentQuery(document);
    return this.getUserByDocumentHandler.execute(query);
  }
}
