import { Entity, ManyToOne } from '../../node_modules/typeorm';
import { User } from '../user/user.entity';
import { Role } from './role.entity';
import { Room } from './room.entity';

@Entity()
export class Member {
    @ManyToOne(type => User, { primary: true })
    user: User;

    @ManyToOne(type => Role)
    role: Role;

    @ManyToOne(type => Room, { primary: true })
    room: Room;
}
