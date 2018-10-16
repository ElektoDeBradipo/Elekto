import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Friend, Friendship } from '../app.interface';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UserNode } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { UserPropertyResolver } from './user-property.resolver';
import { User } from './user.decorator';

@Resolver('Friend')
export class FriendResolver extends UserPropertyResolver {
  constructor(prisma: PrismaService, provider: ProviderService) {
    super(prisma, provider);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation()
  async friendAdd(
    @User() user: UserNode,
    @Args('friendId') friendId: string,
  ): Promise<Partial<Friend>> {
    const friends = await this.prisma.r.users({
      where: {
        id: friendId,
        OR: [
          {
            friendRequestsReceived_some: {
              source: {
                id: user.id,
              },
            },
          },
          { friendRequestsEmitted_some: { target: { id: user.id } } },
        ],
      },
    });
    let friend = friends[0];
    if (!friend) {
      friend = await this.prisma.r
        .createFriendRequest({
          source: { connect: { id: user.id } },
          target: { connect: { id: friendId } },
        })
        .target();
    }
    return { ...(<Partial<Friend>>friend), friendship: Friendship.PENDING };
  }

  @UseGuards(GqlAuthGuard)
  @Mutation()
  async friendRemove(
    @User() user: UserNode,
    @Args('friendId') friendId: string,
  ): Promise<Partial<Friend>> {
    await this.prisma.r.deleteManyFriendRequests({
      OR: [
        {
          source: { id: user.id },
          target: { id: friendId },
        },
        {
          source: { id: friendId },
          target: { id: user.id },
        },
      ],
    });
    return <Partial<Friend>>await this.prisma.r.user({ id: friendId });
  }
}
