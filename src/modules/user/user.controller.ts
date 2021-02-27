import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe
} from '@nestjs/common';
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

  @Get(':id')
  public async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body(new ValidationPipe()) user: UserFilter): Promise<User> {
    return this.userService.create(user);
  }
}
