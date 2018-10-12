import { Test, TestingModule } from '@nestjs/testing';
import { SchemaService } from './schema.service';

describe('SchemaService', () => {
  let service: SchemaService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchemaService],
    }).compile();
    service = module.get<SchemaService>(SchemaService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
