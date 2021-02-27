import { BadRequestException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private readonly userService: UserService) {}

  /**
   * To use in controller
   * @Param('id', UserPipe)...
   * @param value
   */
  async transform(value: string): Promise<User> {
    const id = parseInt(value, 10);
    if (isNaN(id)) {
      throw new BadRequestException('Validation failed (numeric string is expected)');
    }

    const user = await this.userService.findOne(id);
    if (!user) {
      throw new BadRequestException({
        message: `User (${id}) not found`,
        statusCode: HttpStatus.NOT_FOUND,
        error: 'Bad Request',
      });
    }

    return user;
  }
}
