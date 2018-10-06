import { IUserPartial } from '../user/user.interface';
import { IMoviePartial } from '../movie/movie.interface';
import { Id } from '../common/common.interface';

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
