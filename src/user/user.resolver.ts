import {
  Resolver,
  Query,
  ResolveProperty,
  Args,
  Parent,
  Info,
  Context,
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';

const getMoviesIds = where => `{ 
  movies(where: { ${where} }) { 
    movie { id, traktId, tmdbId, imdbId } 
  } 
}`;

@Resolver('User')
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query('user')
  async user(@Args('id') id: string, @Info() info) {
    return await this.prisma.query.user({ where: { id } }, info);
  }

  @ResolveProperty()
  async moviesWatched(@Parent() user) {
    const { id } = user;
    const userMovies = await this.prisma.query.user(
      { where: { id } },
      getMoviesIds('watched: true'),
    );
    const moviesIds = userMovies.movies.map(m => m.movie);
    return moviesIds.map(movie => ({
      id: movie.id,
      title: movie.tmdbId,
      year: 2018,
      overview: 'nssdsdflsdkfsdlfk',
    }));
  }

  @ResolveProperty()
  async moviesWatchlisted(@Parent() user) {
    const { id } = user;
    const userMovies = await this.prisma.query.user(
      { where: { id } },
      getMoviesIds('watchlisted: true'),
    );
    const moviesIds = userMovies.movies.map(m => m.movie);
    return moviesIds.map(movie => ({
      id: movie.id,
      title: movie.tmdbId,
      year: 2018,
      overview: 'nssdsdflsdkfsdlfk',
    }));
  }
}
