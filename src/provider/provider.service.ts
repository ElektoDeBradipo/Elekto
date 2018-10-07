import { Injectable } from '@nestjs/common';
import { IMovie, IMovieFull, IMovieIds } from '../movie/movie.interface';
import { PrismaService } from '../prisma/prisma.service';
import { TmdbProvider } from './tmdb.provider';

@Injectable()
export class ProviderService {
  constructor(
    private tmdbProvider: TmdbProvider,
    private prisma: PrismaService,
  ) {}

  async getMovie(ids: IMovieIds): Promise<IMovieFull> {
    let movie: IMovie;
    if (ids.tmdbId) {
      movie = await this.tmdbProvider.getMovie(ids.tmdbId);
    } else {
      throw new Error('No provider');
    }

    return { ...movie, id: ids.id };
  }

  async getTrendingMovies(
    number: number = 20,
    excludes: IMovieIds[] = [],
  ): Promise<IMovieFull[]> {
    const tmdbIds = excludes.filter(x => x.tmdbId).map(x => x.tmdbId);

    const tmdbMovies = await this.tmdbProvider.getTrendingMovies(
      number,
      tmdbIds,
    );

    const movies: IMovieFull[] = [];
    for (const tmdbMovie of tmdbMovies) {
      let movieDb = await this.prisma.query.movie({
        where: { tmdbId: tmdbMovie.id },
      });

      if (!movieDb) {
        movieDb = await this.prisma.mutation.createMovie({
          data: { tmdbId: tmdbMovie.id },
        });
      }

      movies.push({ ...tmdbMovie, id: movieDb.id });
    }

    return movies;
  }
}
