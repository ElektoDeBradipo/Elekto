import { Module } from '@nestjs/common';
import { RoomResolver } from './room.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { ProviderModule } from '../provider/provider.module';

@Module({
  imports: [PrismaModule, ProviderModule],
  providers: [RoomResolver],
})
export class RoomModule {}
