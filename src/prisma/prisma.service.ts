import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Prisma as OldPrisma } from './old.prisma.binding';
import { prisma, Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends OldPrisma {
  public r: Prisma = prisma;
  constructor(config: ConfigService) {
    super({
      endpoint: config.get('PRISMA_ENDPOINT'),
      debug: config.isDebug,
    });
  }
}
