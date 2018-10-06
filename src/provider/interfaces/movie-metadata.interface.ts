import { IMovie } from '../../movie/movie.interface';

export interface IMovieMetadataProvider {
  getMovie(id: string): IMovie | Promise<IMovie>;
  getTrendingMovies(
    number: number,
    excludes: string[],
  ): IMovie[] | Promise<IMovie[]>;
}
