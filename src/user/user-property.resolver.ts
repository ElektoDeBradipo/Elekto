import { Args, Parent, ResolveProperty } from '@nestjs/graphql';
import { UserMovie, UserRoom, Friend } from '../app.interface';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';

export class UserPropertyResolver {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly provider: ProviderService,
  ) {}

  @ResolveProperty()
  async movies(
    @Parent() { id },
    @Args('watchlisted') watchlisted: boolean,
    @Args('watched') watched: boolean,
  ): Promise<Partial<UserMovie>[]> {
    const movies = await this.prisma.r.movies({
      where: { movieLinks_some: { user: { id }, watched, watchlisted } },
    });
    const resultPromises = movies.map(async movie => {
      const movieMetaPromise = this.provider.getMovie(movie);
      const movieStatusPromise = this.prisma.r.movieLinks({
        where: { user: { id }, movie: { id: movie.id } },
      });
      return {
        id: movie.id,
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

  @ResolveProperty()
  async friends(@Parent() { id }): Promise<Partial<Friend>[]> {
    return await this.prisma.r.users({
      where: {
        OR: [
          { friendRequestsReceived_some: { target: { id } } },
          { friendRequestsEmitted_some: { source: { id } } },
        ],
      },
    });
  }
}
