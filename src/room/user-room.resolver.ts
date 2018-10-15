import { Resolver } from '@nestjs/graphql';
import { ConfigService } from '../config/config.service';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { RoomPropertyResolver } from './room-property.resolver';
import { RoomService } from './room.service';

@Resolver('UserRoom')
export class UserRoomResolver extends RoomPropertyResolver {
  constructor(
    prisma: PrismaService,
    provider: ProviderService,
    config: ConfigService,
    service: RoomService,
  ) {
    super(prisma, provider, config, service);
  }
}
