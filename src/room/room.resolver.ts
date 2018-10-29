import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Room } from '../app.interface';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { ConfigService } from '../config/config.service';
import { RoomType } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { User } from '../user/user.decorator';
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

  @UseGuards(GqlAuthGuard)
  @Mutation()
  async roomCreate(
    @Args('name') name: string,
    @Args('type') type: RoomType,
    @Args('members') members: string[],
    @User() user,
  ): Promise<Partial<Room>> {
    let membersConnect = [];
    if (members) membersConnect = members.map(id => ({ id }));
    return await this.prisma.r.createRoom({
      name,
      type,
      owner: { connect: { id: user.id } },
      members: { connect: [{ id: user.id }, ...membersConnect] },
    });
  }
}
