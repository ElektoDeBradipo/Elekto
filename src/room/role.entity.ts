import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    RelationId,
    ManyToOne,
} from 'typeorm';
import { Permission } from './permission.entity';
import { Room } from './room.entity';

@Entity()
export class Role {
    @PrimaryGeneratedColumn() id: number;
    @Column() name: string;

    @OneToMany(type => Permission, permission => permission.role, {
        eager: true,
    })
    permissionEntities: Permission[];

    @RelationId((role: Role) => role.permissionEntities)
    permissions: string[];

    @ManyToOne(type => Room, { nullable: true })
    room: Room;
}
