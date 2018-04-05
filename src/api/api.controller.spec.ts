import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ApiController } from './api.controller';

describe('ApiController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ApiController],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const apiController = app.get<ApiController>(ApiController);
      expect(apiController.root()).toBe('Hello World!');
    });
  });
});
