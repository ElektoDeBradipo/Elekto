import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuthPayload, IUser, IUserToken } from './auth.interface';
import { User } from '../prisma/prisma.binding';


@Injectable()
export class AuthService {

    constructor(private jwt: JwtService){}

    generateJwtToken(user: User): IAuthPayload{
        if(!user) throw new Error("user is null");

        let token: string = this.jwt.sign({
            id: user.id,
            email: user.email
        });
        return {token, user:<IUser> user};
    }

    validateJwtToken(token: string): IUserToken{
        return this.jwt.verify(token)
    }
}
