import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { Member } from './member.entity';
import { Room } from './room.entity';
import { Role } from './role.entity';
import { Permission } from './permission.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Room, Member, Role, Permission]),
        GraphQLModule,
    ],
})
export class RoomModule {}
