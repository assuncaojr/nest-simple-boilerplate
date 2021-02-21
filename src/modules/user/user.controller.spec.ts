import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockValueTestingRepository } from '../../setupTest';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserModule } from './user.module';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserModule,
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: MockValueTestingRepository,
        }
      ],
      controllers: [UserController],
    })
      .compile();

    app = module.createNestApplication();
    controller = module.get<UserController>(UserController);
    await app.init();
  });

  afterEach(() => app.close());

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
