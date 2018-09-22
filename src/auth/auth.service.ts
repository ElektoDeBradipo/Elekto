import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import { UserService } from '../user/user-service';
import { IUser } from '../user/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    createToken(user: IUser): string {
        const payload: JwtPayload = { sub: user.id };
        return jwt.sign(payload, 'secretKey', { expiresIn: 3600 });
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.find(payload.sub);
    }
}
