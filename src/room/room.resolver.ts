import {
  Resolver,
  Args,
  Query,
  Info,
  ResolveProperty,
  Parent,
  Context,
} from '@nestjs/graphql';
import { IRoomPartial, ResultMode } from './room.interface';
import { PrismaService } from '../prisma/prisma.service';
import { ParentArgs } from '../common/parent-args.decorator';
import {
  IMovie,
  IMoviePartial,
  IMovieIds,
  IMovieFull,
} from '../movie/movie.interface';
import { Movie } from '../prisma/prisma.binding';
import { ProviderService } from '../provider/provider.service';
import { ConfigService } from '../config/config.service';

const roomWatchlisted = `
{ 
  members { 
    id 
    movies(where: { watchlisted: true }) { 
      movie { 
        id
        tmdbId
        imdbId
        traktId 
      } 
    } 
  } 
}`;

const roomWatched = `
{ 
  members { 
    id 
    movies(where: { watched: true }) { 
      movie { 
        id
        tmdbId
        imdbId
        traktId 
      } 
    } 
  } 
}`;

@Resolver('Room')
export class RoomResolver {
  private defaultResultNumber: number;
  constructor(
    private prisma: PrismaService,
    private provider: ProviderService,
    private config: ConfigService,
  ) {
    this.defaultResultNumber = config.defaultResultNumber;
  }

  @Query()
  async room(@Args('id') id: string, @Info() info): Promise<IMoviePartial> {
    return await this.prisma.query.room({ where: { id } }, info);
  }

  @ResolveProperty()
  async movies(@Parent() { id }, @Args('mode') mode): Promise<IMovie[]> {
    const movies = new Map<string, MovieMeta>();

    if (!mode) {
      mode = ResultMode.WATCHLISTED;
    }

    if (mode == ResultMode.WATCHLISTED) {
      const room = await this.prisma.query.room(
        { where: { id } },
        roomWatchlisted,
      );

      for (const member of room.members) {
        for (const movie of member.movies.map(x => x.movie)) {
          let m = movies.get(movie.id);
          if (!m) {
            const meta = await this.provider.getMovie(movie);
            m = {
              id: movie.id,
              ids: movie,
              watchedCount: 0,
              watchlistedCount: 0,
              ...meta,
            };
          }
          m.watchlistedCount++;
          movies.set(movie.id, m);
        }
      }
    } else if (mode == ResultMode.TRENDING) {
      const room = await this.prisma.query.room({ where: { id } }, roomWatched);
      const excludedMovies = new Map<string, Partial<IMovieIds>>();

      for (const member of room.members) {
        for (const movie of member.movies.map(x => x.movie)) {
          excludedMovies.set(movie.id, movie);
        }
      }

      return await this.provider.getTrendingMovies(
        this.defaultResultNumber,
        Array.from(excludedMovies.values()),
      );
    }

    return Array.from(movies.values()).sort((m1, m2) => {
      if (mode == ResultMode.WATCHLISTED) {
        return m2.watchlistedCount - m1.watchlistedCount;
      }
      return 0;
    });
  }
}

export interface MovieMeta extends IMovieFull {
  ids: Partial<IMovieIds>;
  watchedCount: number;
  watchlistedCount: number;
}
