import { CacheStore, CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Tmdb } from 'tmdb';
import { Movie } from '../app.interface';
import { ConfigService } from '../config/config.service';
import { IMovieMetadataProvider } from './interfaces/movie-metadata.interface';

const trendingKey = page => `movie:trending:tmdb:${page}`;

const toMovie = ({ id, title, overview, releaseDate }): Movie => ({
  id: `${id}`,
  title,
  overview,
  releaseDate: new Date(releaseDate),
});

@Injectable()
export class TmdbProvider implements IMovieMetadataProvider {
  private tmdb: Tmdb;
  constructor(
    private config: ConfigService,
    @Inject(CACHE_MANAGER) private cache: CacheStore,
  ) {
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
      const cachedResponse = <unknown>await this.cache.get(trendingKey(page));
      const response =
        cachedResponse || (await this.tmdb.get('movie/popular', { page }));
      if (!cachedResponse) this.cache.set(trendingKey(page), response);
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

  async searchMovie(search: string): Promise<Movie[]> {
    const response = await this.tmdb.get('search/movie', { query: search });
    const movies = response.results.map(toMovie);
    return movies;
  }
}
