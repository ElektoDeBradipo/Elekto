import { UseGuards } from '@nestjs/common';
import {
  Args,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { User as UserInterface, UserMovie, UserRoom } from '../app.interface';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { User } from './user.decorator';

@Resolver('Friend')
@Resolver('User')
export class UserResolver {
  constructor(
    private prisma: PrismaService,
    private provider: ProviderService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query()
  async user(@Args('id') id: string): Promise<Partial<UserInterface>> {
    return await this.prisma.r.user({ id });
  }

  @UseGuards(GqlAuthGuard)
  @Query()
  async me(@User() user): Promise<Partial<UserInterface>> {
    return await this.prisma.r.user({ id: user.id });
  }

  @ResolveProperty()
  async movies(
    @Parent() { id },
    @Args('watchlisted') watchlisted: boolean,
    @Args('watched') watched: boolean,
  ): Promise<UserMovie[]> {
    const movies = await this.prisma.r.movies({
      where: { movieLinks_some: { user: { id }, watched, watchlisted } },
    });
    const resultPromises = movies.map(async movie => {
      const movieMetaPromise = this.provider.getMovie(movie);
      const movieStatusPromise = this.prisma.r.movieLinks({
        where: { user: { id }, movie: { id: movie.id } },
      });
      return {
        ...(await movieMetaPromise),
        ...(await movieStatusPromise)[0],
      };
    });
    return Promise.all(resultPromises);
  }

  @ResolveProperty()
  async rooms(@Parent() { id }): Promise<Partial<UserRoom>[]> {
    const rooms = await this.prisma.r.rooms({
      where: { OR: [{ members_some: { id } }, { owner: { id } }] },
    });
    const resultPromises = rooms.map(async room => {
      const owned = Boolean(
        (await this.prisma.r
          .user({ id })
          .ownedRooms({ where: { id: room.id } })).length,
      );
      return { owned, ...room };
    });
    return Promise.all(resultPromises);
  }
}
