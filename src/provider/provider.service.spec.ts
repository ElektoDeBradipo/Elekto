import { Test, TestingModule } from '@nestjs/testing';
import { ProviderService } from './provider.service';

describe('ProviderService', () => {
  let service: ProviderService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderService],
    }).compile();
    service = module.get<ProviderService>(ProviderService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
