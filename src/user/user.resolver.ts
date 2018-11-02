import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver, Mutation, Parent } from '@nestjs/graphql';
import { User as UserInterface, UserMovie } from '../app.interface';
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
    @User() user,
    @Args('search') search: string,
  ): Promise<Partial<UserInterface>[]> {
    if (!search || search.length < 2) return [];
    return await this.prisma.r.users({
      where: {
        nickname_contains: search,
        id_not: user.id,
        AND: [
          { friendRequestsReceived_none: { source: { id: user.id } } },
          { friendRequestsEmitted_none: { target: { id: user.id } } },
        ],
      },
      first: 15,
    });
  }

  @Mutation()
  async userWatched(
    @Args('movieId') movieId: string,
    @Args('value') watched: boolean,
    @User() { id },
  ): Promise<UserMovie> {
    const movie = await this.prisma.r.movie({ id: movieId });
    if (!movie) throw new Error('Movie not found');
    const movieLinks = await this.prisma.r.movieLinks({
      where: { user: { id }, movie: { id: movie.id } },
    });
    let watchlisted = false;
    if (movieLinks.length > 0) {
      watchlisted = movieLinks[0].watchlisted;
      await this.prisma.r.updateManyMovieLinks({
        where: { user: { id }, movie: { id: movie.id } },
        data: { watched },
      });
    } else {
      await this.prisma.r.createMovieLink({
        movie: { connect: { id: movie.id } },
        user: { connect: { id } },
        watchlisted,
        watched,
      });
    }

    return { ...(await this.provider.getMovie(movie)), watched, watchlisted };
  }

  @Mutation()
  async userWatchlisted(
    @Args('movieId') movieId: string,
    @Args('value') watchlisted: boolean,
    @User() { id },
  ): Promise<UserMovie> {
    const movie = await this.prisma.r.movie({ id: movieId });
    if (!movie) throw new Error('Movie not found');
    const movieLinks = await this.prisma.r.movieLinks({
      where: { user: { id }, movie: { id: movie.id } },
    });
    let watched = false;
    if (movieLinks.length > 0) {
      watched = movieLinks[0].watched;
      await this.prisma.r.updateManyMovieLinks({
        where: { user: { id }, movie: { id: movie.id } },
        data: { watchlisted },
      });
    } else {
      await this.prisma.r.createMovieLink({
        movie: { connect: { id: movie.id } },
        user: { connect: { id } },
        watched,
        watchlisted,
      });
    }

    return { ...(await this.provider.getMovie(movie)), watched, watchlisted };
  }
}
