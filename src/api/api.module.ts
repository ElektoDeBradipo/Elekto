import { Module } from '@nestjs/common';

import { DataModule } from '../data/data.module';
import { ApiController } from './api.controller';

@Module({
  imports: [DataModule],
  controllers: [ApiController],
  components: [],
})
export class ApiModule {}
