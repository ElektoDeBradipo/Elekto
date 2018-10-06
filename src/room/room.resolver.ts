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

const roomWathlisted = `
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

@Resolver('Room')
export class RoomResolver {
  constructor(
    private prisma: PrismaService,
    private provider: ProviderService,
  ) {}

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
        roomWathlisted,
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
    }

    return Array.from(movies.entries())
      .map(([key, movie]) => movie)
      .sort((m1, m2) => {
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
