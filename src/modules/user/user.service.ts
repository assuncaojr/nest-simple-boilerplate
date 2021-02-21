import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async create(user: User): Promise<User> {
    const entity = Object.assign(new User(), user);
    return this.usersRepository.save(entity);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
