import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, Column } from 'typeorm';
import { User } from './user.entity';
import { Token } from './token.entity';
import { AccountType } from './account.type';

@Entity()
export class Account {
	@PrimaryGeneratedColumn() id: number;

	@Column() uuid: string;

	@Column({
		type: 'enum',
		enum: AccountType,
	})
	type: AccountType;

	@ManyToOne((type) => User, (user) => user.accounts)
	user: User;

	@OneToOne((type) => Token)
	@JoinColumn()
	token: Token;
}
