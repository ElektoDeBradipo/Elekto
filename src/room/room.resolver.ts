import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { Room } from '../app.interface';
import { ConfigService } from '../config/config.service';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { RoomPropertyResolver } from './room-property.resolver';
import { RoomService } from './room.service';

@Resolver('Room')
export class RoomResolver extends RoomPropertyResolver {
  constructor(
    prisma: PrismaService,
    provider: ProviderService,
    config: ConfigService,
    service: RoomService,
  ) {
    super(prisma, provider, config, service);
  }

  @Query()
  async room(@Args('id') id: string, @Info() info): Promise<Partial<Room>> {
    return await this.prisma.r.room({ id });
  }
}
