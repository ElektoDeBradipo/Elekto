import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUser } from './interfaces/user.interface';
import { Account } from './account.entity';
import { AccountType } from './account.type';
import { CreateUserDto } from './interfaces/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Account)
        private readonly accountRepository: Repository<Account>,
    ) {}

    async find(id: number): Promise<IUser> {
        return await this.userRepository.findOne(id);
    }

    async findByGoogle(id: string): Promise<IUser> {
        const accounts: Account[] = await this.accountRepository.find({
            relations: ['user'],
            where: { type: AccountType.GOOGLE, uuid: id },
        });
        return accounts.length > 0 ? accounts[0].user : undefined;
    }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const newUser: User = new User();
        newUser.username = createUserDto.username;

        const user: User = await this.userRepository.save(newUser);

        if (createUserDto.accounts) {
            await Promise.all(
                createUserDto.accounts.map(a => {
                    const account = new Account();
                    account.uuid = a.uuid;
                    account.type = a.type;
                    account.user = user;
                    return this.accountRepository.save(account);
                }),
            );
        }

        return user;
    }
}
