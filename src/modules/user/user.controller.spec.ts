import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import {
  MockValueTestingRepository as mockedRepo
} from '../../setupTest';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserModule } from './user.module';
import { UserService } from './user.service';
import * as supertest from 'supertest';

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
          useValue: mockedRepo,
        }
      ],
      controllers: [UserController],
    })
      .compile();

    app = module.createNestApplication();
    controller = module.get<UserController>(UserController);
    await app.init();
  });

  afterEach(() => {
    mockedRepo.find.mockReset();
    app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it ('should return a list of users', async () => {
    const mockedData = [{
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@mail.com',
      password: '$rat5artara',
      active: true,
    }];

    mockedRepo.find.mockReturnValue(mockedData);

    const { body } = await supertest
      .agent(app.getHttpServer())
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200);

    expect(body).toEqual(mockedData);
  });

  it ('should create a user', async () => {
    const body = {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@mail.com',
      password: '123456',
      isActive: false,
    };

    /**
     * Use of Save method instead Create 'cause this
     * return data to validate response
     * */
    mockedRepo.save.mockReturnValue(body);

    const { body: data } = await supertest
      .agent(app.getHttpServer())
      .post('/users')
      .set('Accept', 'application/json')
      .send(body)
      .expect(201);

    expect(data).toEqual(body);
  });
});
