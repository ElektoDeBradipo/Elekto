import { Injectable } from '@nestjs/common';
import { TmdbProvider } from './tmdb.provider';
import { IMovie, IMovieIds } from '../movie/movie.interface';

@Injectable()
export class ProviderService {
  constructor(private tmdbProvider: TmdbProvider) {}

  async getMovie(ids: Partial<IMovieIds>): Promise<IMovie> {
    if (ids.tmdbId) {
      return await this.tmdbProvider.getMovie(ids.tmdbId);
    }

    return undefined;
  }

  async getTrendingMovies(
    number: number = 20,
    excludes: Partial<IMovieIds>[] = [],
  ): Promise<IMovie[]> {
    const tmdbIds = excludes.filter(x => x.tmdbId).map(x => x.tmdbId);

    const movies = await this.tmdbProvider.getTrendingMovies(number, tmdbIds);

    return movies;
  }
}
