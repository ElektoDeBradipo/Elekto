import {
  IMovieMetadataProvider,
  IMovie,
} from './interfaces/movie-metadata.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Tmdb } from 'tmdb';

@Injectable()
export class TmdbProvider implements IMovieMetadataProvider {
  private tmdb: Tmdb;
  constructor(private config: ConfigService) {
    this.tmdb = new Tmdb(config.get('TMDB_API_KEY'));
  }

  async getMovie(id: string): Promise<IMovie> {
    const movie = await this.tmdb.getMovie(id);
    return {
      title: movie.originalTitle,
      releaseDate: new Date(movie.releaseDate),
      overview: movie.overview,
    };
  }
}
