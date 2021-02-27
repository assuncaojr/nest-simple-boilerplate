import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserFilter } from './user.filter';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body(new ValidationPipe()) user: UserFilter): Promise<User> {
    return this.userService.create(user);
  }
}
