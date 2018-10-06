import { Injectable } from '@nestjs/common';
import { TmdbProvider } from './tmdb.provider';
import { IMovie } from '../movie/movie.interface';

@Injectable()
export class ProviderService {
  constructor(private tmdbProvider: TmdbProvider) {}

  async getMovie(ids: { tmdbId?: string }): Promise<IMovie> {
    if (ids.tmdbId) {
      return await this.tmdbProvider.getMovie(ids.tmdbId);
    }

    return undefined;
  }
}
