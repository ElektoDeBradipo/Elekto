import { IRoom } from '../room/room.interface';
import { IMovie } from '../movie/movie.interface';
import { Id } from '../common/common.interface';

export class IUser {
  id: string;
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  friends: [IUser];
  moviesWatched: [IMovie];
  moviesWatchlisted: [IMovie];
  rooms: [IRoom];
  ownedRooms: [IRoom];
}

export type IUserFull = IRoom & Id;
export type IUserPartial = Partial<IUserFull>;
