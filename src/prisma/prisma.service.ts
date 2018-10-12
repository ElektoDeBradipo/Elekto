import { Injectable } from '@nestjs/common';
import { prisma, Prisma } from './prisma.binding';

@Injectable()
export class PrismaService {
  public r: Prisma = prisma;
}
