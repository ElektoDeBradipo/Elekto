/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
import { RoomType } from './prisma/prisma.binding';

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): R | Result | Promise<R | Result>;
};

/** Date custom scalar type */
export type Date = any;

export interface Query {
  me?: User | null;
  user?: User | null;
  users: User[];
  movie?: Movie | null;
  movies: Movie[];
  movieUser?: UserMovie | null;
  moviesUser: UserMovie[];
  room?: Room | null;
}

export interface User {
  id: string;
  email: string;
  nickname: string;
  firstName?: string | null;
  lastName?: string | null;
  friends: Friend[];
  movies: UserMovie[];
  rooms: UserRoom[];
}

export interface Friend {
  id: string;
  email: string;
  nickname: string;
  firstName?: string | null;
  lastName?: string | null;
  friends: Friend[];
  movies: UserMovie[];
  rooms: UserRoom[];
  friendship: Friendship;
}

export interface UserMovie {
  id: string;
  title: string;
  releaseDate: Date;
  overview: string;
  watched: boolean;
  watchlisted: boolean;
}

export interface UserRoom {
  id: string;
  type: RoomType;
  name: string;
  owner: User;
  members: User[];
  movies?: Movie[] | null;
  owned: boolean;
}

export interface Movie {
  id: string;
  title: string;
  releaseDate: Date;
  overview: string;
}

export interface Room {
  id: string;
  type: RoomType;
  name: string;
  owner: User;
  members: User[];
  movies?: Movie[] | null;
}

export interface Mutation {
  signup: AuthPayload;
  login: AuthPayload;
  userUpdate?: User | null;
  friendAdd?: User | null;
  friendRemove?: User | null;
  userWatched?: UserMovie | null;
  userWatchlisted?: UserMovie | null;
  roomCreate?: Room | null;
  roomAdd: User[];
  roomRemove: User[];
  roomUpdate?: Room | null;
  roomDelete?: string | null;
}

export interface AuthPayload {
  token: string;
  user: User;
}
export interface UserQueryArgs {
  id: string;
}
export interface UsersQueryArgs {
  search?: string | null;
}
export interface MovieQueryArgs {
  id: string;
}
export interface MoviesQueryArgs {
  search?: string | null;
}
export interface MovieUserQueryArgs {
  id: string;
}
export interface MoviesUserQueryArgs {
  search?: string | null;
}
export interface RoomQueryArgs {
  id: string;
}
export interface MoviesUserArgs {
  watched?: boolean | null;
  watchlisted?: boolean | null;
}
export interface MoviesFriendArgs {
  watched?: boolean | null;
  watchlisted?: boolean | null;
}
export interface MoviesUserRoomArgs {
  mode?: MovieModeInput | null;
}
export interface MoviesRoomArgs {
  mode?: MovieModeInput | null;
}
export interface SignupMutationArgs {
  nickname: string;
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
}
export interface LoginMutationArgs {
  email: string;
  password: string;
}
export interface UserUpdateMutationArgs {
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}
export interface FriendAddMutationArgs {
  friendId: string;
}
export interface FriendRemoveMutationArgs {
  friendId: string;
}
export interface UserWatchedMutationArgs {
  movieId: string;
  value: boolean;
}
export interface UserWatchlistedMutationArgs {
  movieId: string;
  value: boolean;
}
export interface RoomCreateMutationArgs {
  name: string;
  type: RoomType;
  members?: (string | null)[] | null;
}
export interface RoomAddMutationArgs {
  users: (string | null)[];
}
export interface RoomRemoveMutationArgs {
  users: (string | null)[];
}
export interface RoomUpdateMutationArgs {
  name?: string | null;
  type?: RoomType | null;
}
export interface RoomDeleteMutationArgs {
  id: string;
}

// export type RoomType = RoomType;
// export enum RoomType {
//   MOVIE = 'MOVIE',
// }

export enum MovieModeInput {
  TRENDING = 'TRENDING',
  WATCHLISTED = 'WATCHLISTED',
}

export enum Friendship {
  ACCEPTED = 'ACCEPTED',
  PENDING = 'PENDING',
  BLOCKED = 'BLOCKED',
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    me?: MeResolver<User | null, any, Context>;
    user?: UserResolver<User | null, any, Context>;
    users?: UsersResolver<User[], any, Context>;
    movie?: MovieResolver<Movie | null, any, Context>;
    movies?: MoviesResolver<Movie[], any, Context>;
    movieUser?: MovieUserResolver<UserMovie | null, any, Context>;
    moviesUser?: MoviesUserResolver<UserMovie[], any, Context>;
    room?: RoomResolver<Room | null, any, Context>;
  }

  export type MeResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {
    id: string;
  }

  export type UsersResolver<R = User[], Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    UsersArgs
  >;
  export interface UsersArgs {
    search?: string | null;
  }

  export type MovieResolver<
    R = Movie | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MovieArgs>;
  export interface MovieArgs {
    id: string;
  }

  export type MoviesResolver<
    R = Movie[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MoviesArgs>;
  export interface MoviesArgs {
    search?: string | null;
  }

  export type MovieUserResolver<
    R = UserMovie | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MovieUserArgs>;
  export interface MovieUserArgs {
    id: string;
  }

  export type MoviesUserResolver<
    R = UserMovie[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MoviesUserArgs>;
  export interface MoviesUserArgs {
    search?: string | null;
  }

  export type RoomResolver<
    R = Room | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RoomArgs>;
  export interface RoomArgs {
    id: string;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    email?: EmailResolver<string, any, Context>;
    nickname?: NicknameResolver<string, any, Context>;
    firstName?: FirstNameResolver<string | null, any, Context>;
    lastName?: LastNameResolver<string | null, any, Context>;
    friends?: FriendsResolver<Friend[], any, Context>;
    movies?: MoviesResolver<UserMovie[], any, Context>;
    rooms?: RoomsResolver<UserRoom[], any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NicknameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FriendsResolver<
    R = Friend[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MoviesResolver<
    R = UserMovie[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MoviesArgs>;
  export interface MoviesArgs {
    watched?: boolean | null;
    watchlisted?: boolean | null;
  }

  export type RoomsResolver<
    R = UserRoom[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace FriendResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    email?: EmailResolver<string, any, Context>;
    nickname?: NicknameResolver<string, any, Context>;
    firstName?: FirstNameResolver<string | null, any, Context>;
    lastName?: LastNameResolver<string | null, any, Context>;
    friends?: FriendsResolver<Friend[], any, Context>;
    movies?: MoviesResolver<UserMovie[], any, Context>;
    rooms?: RoomsResolver<UserRoom[], any, Context>;
    friendship?: FriendshipResolver<Friendship, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NicknameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FriendsResolver<
    R = Friend[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MoviesResolver<
    R = UserMovie[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MoviesArgs>;
  export interface MoviesArgs {
    watched?: boolean | null;
    watchlisted?: boolean | null;
  }

  export type RoomsResolver<
    R = UserRoom[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FriendshipResolver<
    R = Friendship,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserMovieResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    title?: TitleResolver<string, any, Context>;
    releaseDate?: ReleaseDateResolver<Date, any, Context>;
    overview?: OverviewResolver<string, any, Context>;
    watched?: WatchedResolver<boolean, any, Context>;
    watchlisted?: WatchlistedResolver<boolean, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ReleaseDateResolver<
    R = Date,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OverviewResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WatchedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WatchlistedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserRoomResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    type?: TypeResolver<RoomType, any, Context>;
    name?: NameResolver<string, any, Context>;
    owner?: OwnerResolver<User, any, Context>;
    members?: MembersResolver<User[], any, Context>;
    movies?: MoviesResolver<Movie[] | null, any, Context>;
    owned?: OwnedResolver<boolean, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TypeResolver<
    R = RoomType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type OwnerResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MembersResolver<
    R = User[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MoviesResolver<
    R = Movie[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MoviesArgs>;
  export interface MoviesArgs {
    mode?: MovieModeInput | null;
  }

  export type OwnedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MovieResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    title?: TitleResolver<string, any, Context>;
    releaseDate?: ReleaseDateResolver<Date, any, Context>;
    overview?: OverviewResolver<string, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ReleaseDateResolver<
    R = Date,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OverviewResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace RoomResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    type?: TypeResolver<RoomType, any, Context>;
    name?: NameResolver<string, any, Context>;
    owner?: OwnerResolver<User, any, Context>;
    members?: MembersResolver<User[], any, Context>;
    movies?: MoviesResolver<Movie[] | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TypeResolver<
    R = RoomType,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type OwnerResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MembersResolver<
    R = User[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MoviesResolver<
    R = Movie[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MoviesArgs>;
  export interface MoviesArgs {
    mode?: MovieModeInput | null;
  }
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    signup?: SignupResolver<AuthPayload, any, Context>;
    login?: LoginResolver<AuthPayload, any, Context>;
    userUpdate?: UserUpdateResolver<User | null, any, Context>;
    friendAdd?: FriendAddResolver<User | null, any, Context>;
    friendRemove?: FriendRemoveResolver<User | null, any, Context>;
    userWatched?: UserWatchedResolver<UserMovie | null, any, Context>;
    userWatchlisted?: UserWatchlistedResolver<UserMovie | null, any, Context>;
    roomCreate?: RoomCreateResolver<Room | null, any, Context>;
    roomAdd?: RoomAddResolver<User[], any, Context>;
    roomRemove?: RoomRemoveResolver<User[], any, Context>;
    roomUpdate?: RoomUpdateResolver<Room | null, any, Context>;
    roomDelete?: RoomDeleteResolver<string | null, any, Context>;
  }

  export type SignupResolver<
    R = AuthPayload,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SignupArgs>;
  export interface SignupArgs {
    nickname: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
  }

  export type LoginResolver<
    R = AuthPayload,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    email: string;
    password: string;
  }

  export type UserUpdateResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserUpdateArgs>;
  export interface UserUpdateArgs {
    id: string;
    nickname?: string | null;
    firstName?: string | null;
    lastName?: string | null;
  }

  export type FriendAddResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FriendAddArgs>;
  export interface FriendAddArgs {
    friendId: string;
  }

  export type FriendRemoveResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FriendRemoveArgs>;
  export interface FriendRemoveArgs {
    friendId: string;
  }

  export type UserWatchedResolver<
    R = UserMovie | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserWatchedArgs>;
  export interface UserWatchedArgs {
    movieId: string;
    value: boolean;
  }

  export type UserWatchlistedResolver<
    R = UserMovie | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserWatchlistedArgs>;
  export interface UserWatchlistedArgs {
    movieId: string;
    value: boolean;
  }

  export type RoomCreateResolver<
    R = Room | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RoomCreateArgs>;
  export interface RoomCreateArgs {
    name: string;
    type: RoomType;
    members?: (string | null)[] | null;
  }

  export type RoomAddResolver<
    R = User[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RoomAddArgs>;
  export interface RoomAddArgs {
    users: (string | null)[];
  }

  export type RoomRemoveResolver<
    R = User[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RoomRemoveArgs>;
  export interface RoomRemoveArgs {
    users: (string | null)[];
  }

  export type RoomUpdateResolver<
    R = Room | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RoomUpdateArgs>;
  export interface RoomUpdateArgs {
    name?: string | null;
    type?: RoomType | null;
  }

  export type RoomDeleteResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RoomDeleteArgs>;
  export interface RoomDeleteArgs {
    id: string;
  }
}

export namespace AuthPayloadResolvers {
  export interface Resolvers<Context = any> {
    token?: TokenResolver<string, any, Context>;
    user?: UserResolver<User, any, Context>;
  }

  export type TokenResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
