import {
  Args,
  Info,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { UserNode } from 'prisma/prisma.binding';
import { Movie, MovieModeInput, Room } from '../app.interface';
import { ConfigService } from '../config/config.service';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { MovieDataMap } from './room.interface';
import { RoomService } from './room.service';

@Resolver('UserRoom')
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
  async room(@Args('id') id: string, @Info() info): Promise<Partial<Room>> {
    return await this.prisma.r.room({ id });
  }

  @ResolveProperty('movies')
  async movies(@Parent() { id }, @Args('mode') mode): Promise<Movie[]> {
    const moviesData: MovieDataMap = await this.service.getMoviesDataMap(id);
    let movies: Movie[] = [];

    switch (mode) {
      case MovieModeInput.WATCHLISTED:
        movies = await this.service.getWatchlistedMovies(moviesData);
        break;
      case MovieModeInput.TRENDING:
        movies = await this.service.getTrendingMovies(moviesData);
        break;
      default:
        movies = await this.service.getWatchlistedMovies(moviesData);
    }

    return movies.sort((m1, m2) => {
      if (mode == MovieModeInput.WATCHLISTED) {
        const m1D = moviesData.get(m1.id);
        const m2D = moviesData.get(m2.id);
        return m2D.watchlisted.length - m1D.watchlisted.length;
      }
      return 0;
    });
  }

  @ResolveProperty()
  async members(@Parent() { id }): Promise<UserNode[]> {
    return await this.prisma.r.users({ where: { rooms_some: { id } } });
  }
}
