import {
  MovieNode,
  RoomNode,
  UserNode,
  MovieLinkNode,
} from '../prisma/prisma.binding';

export interface MovieData {
  node: MovieNode;
  watched: string[];
  watchlisted: string[];
}

export type MovieDataMap = Map<string, MovieData>;
