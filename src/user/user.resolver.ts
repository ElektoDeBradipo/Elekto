import { UseGuards } from '@nestjs/common';
import {
  Args,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { IMovie } from '../movie/movie.interface';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { User } from './user.decorator';

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

  @UseGuards(GqlAuthGuard)
  @Query()
  async user(@Args('id') id: string): Promise<any> {
    return await this.prisma.query.user({ where: { id } });
  }

  @UseGuards(GqlAuthGuard)
  @Query()
  async me(@User() user) {
    return await this.prisma.query.user({ where: { id: user.id } });
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
