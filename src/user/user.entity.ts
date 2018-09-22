import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Account } from './account.entity';
import { Member } from 'room/member.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn() id: number;

    @Column({ length: 100 })
    username: string;

    @OneToMany(type => Account, account => account.user)
    accounts: Account[];

    @OneToMany(type => Member, member => member.user)
    members: Member[];
}
