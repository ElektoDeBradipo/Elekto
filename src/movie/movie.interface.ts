import { Id } from '../common/common.interface';

export interface IMovie {
  title: string;
  releaseDate: Date;
  overview: string;
}

export type IMovieFull = IMovie & Id;
export type IMoviePartial = Partial<IMovieFull>;

export interface IMovieIds {
  id: string;
  imdbId?: string;
  tmdbId?: string;
  traktId?: string;
}
