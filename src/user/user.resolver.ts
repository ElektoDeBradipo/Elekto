import {
  Resolver,
  Query,
  ResolveProperty,
  Args,
  Parent,
  Info,
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { IUserPartial } from './user.interface';
import { IMovie } from 'movie/movie.interface';

const getMoviesIds = where => `{ 
  movies(where: { ${where} }) { 
    movie { id, traktId, tmdbId, imdbId } 
  } 
}`;

@Resolver('User')
export class UserResolver {
  constructor(
    private prisma: PrismaService,
    private provider: ProviderService,
  ) {}

  @Query('user')
  async user(@Args('id') id: string, @Info() info): Promise<IUserPartial> {
    return await this.prisma.query.user({ where: { id } }, info);
  }

  @ResolveProperty()
  async moviesWatched(@Parent() user): Promise<IMovie[]> {
    const { id } = user;
    const userMovies = await this.prisma.query.user(
      { where: { id } },
      getMoviesIds('watched: true'),
    );
    const moviesIds = userMovies.movies.map(m => m.movie);
    return Promise.all(
      moviesIds.map(async ids => {
        const movie = await this.provider.getMovie(ids);
        return { id: ids.id, ...movie };
      }),
    );
  }

  @ResolveProperty()
  async moviesWatchlisted(@Parent() user): Promise<IMovie[]> {
    const { id } = user;
    const userMovies = await this.prisma.query.user(
      { where: { id } },
      getMoviesIds('watchlisted: true'),
    );
    const moviesIds = userMovies.movies.map(m => m.movie);
    return Promise.all(
      moviesIds.map(async ids => {
        const movie = await this.provider.getMovie(ids);
        return { id: ids.id, ...movie };
      }),
    );
  }
}
