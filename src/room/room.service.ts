import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { IMovieFull, IMovieIds } from '../movie/movie.interface';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { MovieData, MovieDataMap } from './room.interface';

const roomQuery = `
{
    id
    members { 
        id
        movies {
            watched
            watchlisted 
            movie { 
                id
                tmdbId
                imdbId
                traktId 
            } 
        } 
    } 
}`;

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
  async getWatchlistedMovies(movies: MovieDataMap): Promise<IMovieFull[]> {
    const result: IMovieFull[] = [];
    for (const movie of movies.values()) {
      if (movie.watchlisted.length > 0 && movie.watched.length == 0) {
        const meta: IMovieFull = await this.provider.getMovie(movie.ids);
        result.push(meta);
      }
    }
    return result;
  }

  async getTrendingMovies(movies: MovieDataMap): Promise<any> {
    const excludedMovies = new Map<string, IMovieIds>();
    for (const movie of movies.values()) {
      if (movie.watched.length > 0) {
        excludedMovies.set(movie.ids.id, movie.ids);
      }
    }
    return await this.provider.getTrendingMovies(
      this.defaultResultNumber,
      Array.from(excludedMovies.values()),
    );
  }

  async getMoviesDataMap(roomId: number): Promise<MovieDataMap> {
    const room = await this.prisma.query.room(
      { where: { id: roomId } },
      roomQuery,
    );
    const movies = new Map<string, MovieData>();
    for (const member of room.members) {
      for (const relation of member.movies) {
        let movie = movies.get(relation.movie.id);
        if (!movie) {
          movie = {
            ids: relation.movie,
            watched: [],
            watchlisted: [],
          };
        }
        if (relation.watched) {
          movie.watched.push(member.id);
        }
        if (relation.watchlisted) {
          movie.watchlisted.push(member.id);
        }
        movies.set(relation.movie.id, movie);
      }
    }
    return movies;
  }
}
