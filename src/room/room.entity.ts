import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Member } from './member.entity';
import { Role } from './role.entity';

@Entity()
export class Room {
    @PrimaryGeneratedColumn() id: number;

    @Column() name: string;

    @OneToMany(type => Member, member => member.room)
    members: Member[];

    @OneToMany(type => Role, role => role.room)
    roles: Role[];
}
