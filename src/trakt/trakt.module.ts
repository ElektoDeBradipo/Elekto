import { Module } from '@nestjs/common'
import { TraktController } from './trakt.controller'
import { TraktService } from './trakt-service'
import { ConfigModule } from '../config/config.module'

@Module({
  imports: [ConfigModule],
  controllers: [TraktController],
  providers: [TraktService],
  exports: [TraktService],
  })
export class TraktModule {}
