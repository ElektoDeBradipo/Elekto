import { Injectable } from '@nestjs/common';
import { Tmdb } from 'tmdb';
import { Movie } from '../app.interface';
import { ConfigService } from '../config/config.service';
import { IMovieMetadataProvider } from './interfaces/movie-metadata.interface';

@Injectable()
export class TmdbProvider implements IMovieMetadataProvider {
  private tmdb: Tmdb;
  constructor(private config: ConfigService) {
    this.tmdb = new Tmdb(config.get('TMDB_API_KEY'));
  }

  async getMovie(id: string): Promise<Movie> {
    const movie = await this.tmdb.getMovie(id);
    return {
      id,
      title: movie.originalTitle,
      releaseDate: new Date(movie.releaseDate),
      overview: movie.overview,
    };
  }

  async getTrendingMovies(
    number: number,
    excludes: string[],
  ): Promise<Movie[]> {
    let fetching = true;
    const movies: Movie[] = [];
    let page = 1;
    while (fetching) {
      const response = await this.tmdb.get('movie/popular', { page });
      page++;
      for (const { id, title, overview, releaseDate } of response.results) {
        if (excludes.indexOf(`${id}`) == -1) {
          movies.push({
            id: `${id}`,
            title,
            overview,
            releaseDate: new Date(releaseDate),
          });
          if (movies.length >= number) break;
        }
      }
      if (movies.length >= number) {
        fetching = false;
      }
      if (response.total_pages <= page) {
        fetching = false;
      }
    }

    return movies;
  }
}
