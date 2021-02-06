import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return project name and description', () => {
      const { projectName, projectDescription } = appController.getIndex()
      expect(projectName).toEqual('SimpleCrud');
      expect(projectDescription).toEqual('A simple CRUD developed with NestJS');
    });
  });
});
