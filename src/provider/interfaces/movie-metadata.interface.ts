import { Movie } from '../../app.interface';

export interface IMovieMetadataProvider {
  getMovie(id: string): Movie | Promise<Movie>;
  getTrendingMovies(
    number: number,
    excludes: string[],
  ): Movie[] | Promise<Movie[]>;
}
