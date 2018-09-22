import { Test, TestingModule } from '@nestjs/testing'
import { TraktService } from './trakt-service'

describe('TraktService', () => {
  let provider: TraktService
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraktService]
    }).compile()
    provider = module.get<TraktService>(TraktService)
  })
  it('should be defined', () => {
    expect(provider).toBeDefined()
  })
})
