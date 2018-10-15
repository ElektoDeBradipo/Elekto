import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProviderModule } from '../provider/provider.module';
import { RoomResolver } from './room.resolver';
import { RoomService } from './room.service';
import { UserRoomResolver } from './user-room.resolver';

@Module({
  imports: [PrismaModule, ProviderModule],
  providers: [RoomResolver, UserRoomResolver, RoomService],
})
export class RoomModule {}
