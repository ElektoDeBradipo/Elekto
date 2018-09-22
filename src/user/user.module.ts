import { Module } from '@nestjs/common';
import { UserService } from './user-service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Account } from './account.entity';
import { Token } from './token.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Account, Token])],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
