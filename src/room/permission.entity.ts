import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Permission {
	@PrimaryColumn() name: string;

	@ManyToOne(type => Role)
	role: Role;
}
