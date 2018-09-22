import { Test, TestingModule } from '@nestjs/testing'
import { TraktController } from './trakt.controller'

describe('Trakt Controller', () => {
  let module: TestingModule
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TraktController]
    }).compile()
  })
  it('should be defined', () => {
    const controller: TraktController = module.get<TraktController>(
      TraktController
    )
    expect(controller).toBeDefined()
  })
})
