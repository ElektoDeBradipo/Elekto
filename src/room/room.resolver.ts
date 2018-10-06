import { Resolver, Args, Query } from '@nestjs/graphql';
import { IRoomPartial } from './room.interface';

@Resolver('Room')
export class RoomResolver {}
