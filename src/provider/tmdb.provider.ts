import { CacheStore, CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Tmdb } from 'tmdb';
import { Movie } from '../app.interface';
import { ConfigService } from '../config/config.service';
import { IMovieMetadataProvider } from './interfaces/movie-metadata.interface';

const trendingKey = page => `movie:trending:tmdb:${page}`;

const toMovie = ({ id, originalTitle, overview, releaseDate }): Movie => ({
  id: `${id}`,
  title: originalTitle,
  overview,
  releaseDate: !!releaseDate ? new Date(releaseDate) : undefined,
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
    return toMovie(movie);
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
      for (const movie of response.results) {
        if (excludes.indexOf(`${movie.id}`) == -1) {
          movies.push(toMovie(movie));
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
