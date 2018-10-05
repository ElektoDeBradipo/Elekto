import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';
import { ConfigService } from '../config/config.service';

@Injectable()
export class PrismaService extends Prisma {
  constructor(private config: ConfigService) {
    super({
      endpoint: config.get('PRISMA_ENDPOINT'),
      debug: config.isDebug,
    });
  }
}
