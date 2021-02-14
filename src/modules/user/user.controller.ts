import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getAll(): Promise<any> {
    return {
      foo: 'bar',
    }
    // return this.userService.findAll();
  }
}
