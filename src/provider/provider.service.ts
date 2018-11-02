import { CacheStore, CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Movie } from '../app.interface';
import { MovieNode } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { TmdbProvider } from './tmdb.provider';

const movieKey = id => `movie:${id}`;

@Injectable()
export class ProviderService {
  constructor(
    private tmdbProvider: TmdbProvider,
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cache: CacheStore,
  ) {}

  async getMovie(movieNodeOrId: MovieNode | string): Promise<Movie> {
    const cachedMovie = <unknown>(
      await this.cache.get<Movie>(
        movieKey(
          typeof movieNodeOrId == 'string' ? movieNodeOrId : movieNodeOrId.id,
        ),
      )
    );
    if (cachedMovie) return <Movie>cachedMovie;

    let movieNode: MovieNode =
      typeof movieNodeOrId == 'string'
        ? await this.prisma.r.movie({ id: movieNodeOrId })
        : movieNodeOrId;

    if (!movieNode.tmdbId) throw new Error('No provider');

    const movie: Movie = await this.tmdbProvider.getMovie(movieNode.tmdbId);
    movie.id = movieNode.id;

    this.cache.set<Movie>(movieKey(movieNode.id), movie);

    return movie;
  }

  async getTrendingMovies(
    number: number = 20,
    excludes: MovieNode[] = [],
  ): Promise<Movie[]> {
    const tmdbIds = excludes.filter(x => x.tmdbId).map(x => x.tmdbId);

    const tmdbMovies = await this.tmdbProvider.getTrendingMovies(
      number,
      tmdbIds,
    );

    const movies: Movie[] = [];
    for (const tmdbMovie of tmdbMovies) {
      const movie: Movie = await this.updateMovie('tmdb', tmdbMovie);
      this.cache.set(movieKey(movie.id), movie);
      movies.push(movie);
    }

    return movies;
  }

  async searchMovie(search: string): Promise<Movie[]> {
    const tmdbMovies = await this.tmdbProvider.searchMovie(search);
    const movies = [];
    for (const tmdbMovie of tmdbMovies) {
      const movie: Movie = await this.updateMovie('tmdb', tmdbMovie);
      this.cache.set(movieKey(movie.id), movie);
      movies.push(movie);
    }
    return movies;
  }

  private async updateMovie(type: 'tmdb', movie: Movie): Promise<Movie> {
    let movieDb = await this.prisma.r.movie({ tmdbId: movie.id });

    if (!movieDb) {
      movieDb = await this.prisma.r.createMovie({ tmdbId: movie.id });
    }

    return { ...movie, id: movieDb.id };
  }
}
