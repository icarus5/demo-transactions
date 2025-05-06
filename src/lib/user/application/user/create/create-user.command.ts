// src/user/application/commands/create-user.command.ts

import { CreateUserDto } from "src/lib/user/domain/user/user-dto";
import { ICommand } from "../../base-command";

export class CreateUserCommand implements ICommand {
  constructor(public readonly userData: CreateUserDto) {}
}
