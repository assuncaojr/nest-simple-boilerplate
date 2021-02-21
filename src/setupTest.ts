const envTest = {
  PROJECT_NAME: 'SimpleCrud',
  PROJECT_DESCRIPTION: 'A simple CRUD developed with NestJS',
};

export const MockValueTestingRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

process.env = Object.assign(envTest, process.env);
