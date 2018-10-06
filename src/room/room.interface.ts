import { IUser } from '../user/user.interface';
import { IMovie } from '../movie/movie.interface';
import { Id } from '../common/common.interface';

export interface IRoom {
  type: RoomType;
  name: string;
  owner: IUser;
  members: [IUser];
  results: [RoomResult];
}

export enum RoomType {
  MOVIE,
}

export type RoomResult = IMovie;

export type IRoomFull = IRoom & Id;
export type IRoomPartial = Partial<IRoomFull>;
