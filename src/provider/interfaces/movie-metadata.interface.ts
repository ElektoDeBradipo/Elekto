export interface IMovieMetadataProvider {
  getMovie(id: string): IMovie | Promise<IMovie>;
}

export interface IMovie {
  title: string;
  releaseDate: Date;
  overview: string;
}
