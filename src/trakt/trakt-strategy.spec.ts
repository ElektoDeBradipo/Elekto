import { Test, TestingModule } from '@nestjs/testing'
import { TraktStrategy } from './trakt-strategy'

describe('TraktStrategy', () => {
  let provider: TraktStrategy
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraktStrategy]
    }).compile()
    provider = module.get<TraktStrategy>(TraktStrategy)
  })
  it('should be defined', () => {
    expect(provider).toBeDefined()
  })
})
