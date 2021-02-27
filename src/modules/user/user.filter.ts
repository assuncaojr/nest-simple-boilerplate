import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { User } from './user.entity';

export class UserFilter extends User {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    maxLength: 120,
  })
  firstName: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    maxLength: 120,
  })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    maxLength: 120,
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    maxLength: 120,
  })
  password: string;

  @IsOptional()
  @ApiProperty({
    type: Boolean,
    default: true,
  })
  isActive: boolean;
}