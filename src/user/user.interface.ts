import { IRoom, IRoomPartial } from '../room/room.interface';
import { IMoviePartial } from '../movie/movie.interface';
import { Id } from '../common/common.interface';

export class IUser {
  id: string;
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  friends: IUserPartial[];
  moviesWatched: IMoviePartial[];
  moviesWatchlisted: IMoviePartial[];
  rooms: IRoomPartial[];
  ownedRooms: IRoomPartial[];
}

export type IUserFull = IRoom & Id;
export type IUserPartial = Partial<IUserFull>;
