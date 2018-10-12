import { Injectable } from '@nestjs/common';
import { Movie } from '../app.interface';
import { ConfigService } from '../config/config.service';
import { MovieNode } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { MovieData, MovieDataMap } from './room.interface';

@Injectable()
export class RoomService {
  private defaultResultNumber: number;
  constructor(
    private prisma: PrismaService,
    private provider: ProviderService,
    private config: ConfigService,
  ) {
    this.defaultResultNumber = this.config.defaultResultNumber;
  }
  async getWatchlistedMovies(movies: MovieDataMap): Promise<Movie[]> {
    const result: Movie[] = [];
    for (const movie of movies.values()) {
      if (movie.watchlisted.length > 0 && movie.watched.length == 0) {
        const meta = await this.provider.getMovie(movie.node);
        result.push(meta);
      }
    }
    return result;
  }

  async getTrendingMovies(movies: MovieDataMap): Promise<Movie[]> {
    const excludedMovies = new Map<string, MovieNode>();
    for (const movie of movies.values()) {
      if (movie.watched.length > 0) {
        excludedMovies.set(movie.node.id, movie.node);
      }
    }
    return await this.provider.getTrendingMovies(
      this.defaultResultNumber,
      Array.from(excludedMovies.values()),
    );
  }

  async getMoviesDataMap(roomId: number): Promise<MovieDataMap> {
    const users = await this.prisma.r.room({ id: roomId }).members();
    const userIds = users.map(x => x.id);
    const movies = await this.prisma.r.movies({
      where: { movieLinks_some: { user: { id_in: userIds } } },
    });
    const result = new Map<string, MovieData>();
    for (const movie of movies) {
      const movieWatchedUsers = this.prisma.r.users({
        where: {
          movieLinks_some: { movie: { id: movie.id }, watched: true },
          rooms_some: { id: roomId },
        },
      });
      const movieWatchlistedUsers = this.prisma.r.users({
        where: {
          movieLinks_some: { movie: { id: movie.id }, watchlisted: true },
          rooms_some: { id: roomId },
        },
      });
      result.set(movie.id, {
        node: movie,
        watched: (await movieWatchedUsers).map(x => x.id),
        watchlisted: (await movieWatchlistedUsers).map(x => x.id),
      });
    }
    return result;
  }
}
