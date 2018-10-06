import { IMovieMetadataProvider } from './interfaces/movie-metadata.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Tmdb } from 'tmdb';
import { IMovie } from '../movie/movie.interface';

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

  async getTrendingMovies(
    number: number,
    excludes: string[],
  ): Promise<IMovie[]> {
    let fetching = true;
    const movies: IMovie[] = [];
    let page = 1;
    while (fetching) {
      const response = await this.tmdb.get('movie/popular', { page });
      page++;
      for (const { id, title, overview, releaseDate } of response.results) {
        if (excludes.indexOf(`${id}`) == -1) {
          movies.push({
            title,
            overview,
            releaseDate: new Date(releaseDate),
          });
          if (movies.length == number) break;
        }
      }
      if (movies.length == number) {
        fetching = false;
      }
      if (response.total_pages == page) {
        fetching = false;
      }
    }

    return movies;
  }
}
