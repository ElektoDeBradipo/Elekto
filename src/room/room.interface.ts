import { Id } from '../common/common.interface';
import { IMovieIds, IMoviePartial } from '../movie/movie.interface';
import { IUserPartial } from '../user/user.interface';

export interface IRoom {
  type: RoomType;
  name: string;
  owner: IUserPartial;
  members: IUserPartial[];
  movies: IMoviePartial[];
}

export type IRoomFull = IRoom & Id;
export type IRoomPartial = Partial<IRoomFull>;

export type RoomType = 'MOVIE';

export enum ResultMode {
  TRENDING = 'TRENDING',
  WATCHLISTED = 'WATCHLISTED',
}

export interface MovieData {
  ids: IMovieIds;
  watched: string[];
  watchlisted: string[];
}

export type MovieDataMap = Map<string, MovieData>;
