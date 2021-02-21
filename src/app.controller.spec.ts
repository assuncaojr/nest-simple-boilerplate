import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiSettingsService } from './utils/api-settings.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: ApiSettingsService,
          useValue: '',
        }
      ],
    })
      .compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(appController).toBeDefined();
    });

    it('should return project info', () => {
      const mockedData = {
        projectName: 'Nest',
        projectDescription: 'Simple NestJS Boilerplate',
        datetime: new Date(),
        success: true,
        version: 1,
      } as any;

      jest.spyOn(appService, 'get').mockImplementation(() => mockedData);

      const expected = {
        projectName: expect.any(String),
        projectDescription: expect.any(String),
        datetime: expect.any(Date),
        success: true,
        version: 1,
      };

      const result = appController.getIndex();
      expect(expected).toEqual(result);
    });
  });
});
