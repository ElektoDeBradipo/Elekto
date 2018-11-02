import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User as UserInterface } from '../app.interface';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { UserPropertyResolver } from './user-property.resolver';
import { User } from './user.decorator';

@UseGuards(GqlAuthGuard)
@Resolver('User')
export class UserResolver extends UserPropertyResolver {
  constructor(prisma: PrismaService, provider: ProviderService) {
    super(prisma, provider);
  }

  @Query()
  async user(@Args('id') id: string): Promise<Partial<UserInterface>> {
    return await this.prisma.r.user({ id });
  }

  @Query()
  async me(@User() user): Promise<Partial<UserInterface>> {
    return await this.prisma.r.user({ id: user.id });
  }

  @Query()
  async users(
    @Args('search') search: string,
  ): Promise<Partial<UserInterface>[]> {
    if (!search || search.length < 2) return [];
    return await this.prisma.r.users({
      where: { nickname_contains: search },
      first: 15,
    });
  }
}
