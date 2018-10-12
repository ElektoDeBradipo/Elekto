import { Injectable } from '@nestjs/common';
import { Movie } from '../app.interface';
import { MovieNode } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { TmdbProvider } from './tmdb.provider';

@Injectable()
export class ProviderService {
  constructor(
    private tmdbProvider: TmdbProvider,
    private prisma: PrismaService,
  ) {}

  async getMovie(movieNode: MovieNode): Promise<Movie> {
    let movie: Movie;
    if (movieNode.tmdbId) {
      movie = await this.tmdbProvider.getMovie(movieNode.tmdbId);
    } else {
      throw new Error('No provider');
    }

    return { ...movie, id: movieNode.id };
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
      let movieDb = await this.prisma.r.movie({ tmdbId: tmdbMovie.id });

      if (!movieDb) {
        movieDb = await this.prisma.r.createMovie({ tmdbId: tmdbMovie.id });
      }

      movies.push({ ...tmdbMovie, id: movieDb.id });
    }

    return movies;
  }
}
