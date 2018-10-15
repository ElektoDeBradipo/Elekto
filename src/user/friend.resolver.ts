import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { UserPropertyResolver } from './user-property.resolver';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { User } from './user.decorator';
import { Friend, Friendship } from '../app.interface';
import { UserNode } from '../prisma/prisma.binding';

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
    const friend = await this.prisma.r
      .createFriendRequest({
        source: { connect: { id: user.id } },
        target: { connect: { id: friendId } },
      })
      .target();
    return { ...(<Partial<Friend>>friend), friendship: Friendship.PENDING };
  }
}
