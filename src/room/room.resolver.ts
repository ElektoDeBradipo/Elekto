import {
  Args,
  Info,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { ConfigService } from '../config/config.service';
import { IMovie, IMovieFull, IMoviePartial } from '../movie/movie.interface';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { MovieDataMap, ResultMode } from './room.interface';
import { RoomService } from './room.service';

@Resolver('Room')
export class RoomResolver {
  private defaultResultNumber: number;
  constructor(
    private prisma: PrismaService,
    private provider: ProviderService,
    private config: ConfigService,
    private service: RoomService,
  ) {
    this.defaultResultNumber = this.config.defaultResultNumber;
  }

  @Query()
  async room(@Args('id') id: string, @Info() info): Promise<IMoviePartial> {
    return await this.prisma.query.room({ where: { id } }, info);
  }

  @ResolveProperty()
  async movies(@Parent() { id }, @Args('mode') mode): Promise<IMovie[]> {
    const moviesData: MovieDataMap = await this.service.getMoviesDataMap(id);
    let movies: IMovieFull[] = [];

    switch (mode) {
      case ResultMode.WATCHLISTED:
        movies = await this.service.getWatchlistedMovies(moviesData);
        break;
      case ResultMode.TRENDING:
        movies = await this.service.getTrendingMovies(moviesData);
        break;
      default:
        movies = await this.service.getWatchlistedMovies(moviesData);
    }

    return movies.sort((m1, m2) => {
      if (mode == ResultMode.WATCHLISTED) {
        const m1D = moviesData.get(m1.id);
        const m2D = moviesData.get(m2.id);
        return m2D.watchlisted.length - m1D.watchlisted.length;
      }
      return 0;
    });
  }
}
