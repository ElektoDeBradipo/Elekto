import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { UserService } from '../user/user-service';
import { ConfigService } from '../config/config-service';
import { IUser } from '../user/interfaces/user.interface';
import { AccountType } from '../user/account.type';
import { AuthService } from './auth.service';
import { AuthGuard } from '../../node_modules/@nestjs/passport';

@Controller('auth')
export class AuthController {
    private googleClient: OAuth2Client;

    constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
        private readonly authService: AuthService,
    ) {
        this.googleClient = new OAuth2Client(
            configService.get('GOOGLE_CLIENT_ID'),
        );
    }

    @Get('google')
    async authByGoogle(
        @Query('tokenId') tokenId: string,
    ): Promise<{ token: string }> {
        const ticket = await this.googleClient.verifyIdToken({
            idToken: tokenId,
            audience: this.configService.get('GOOGLE_CLIENT_ID'),
        });
        const payload = ticket.getPayload();
        const userId: string = payload.sub;

        let user: IUser = await this.userService.findByGoogle(userId);

        if (!user) {
            user = await this.userService.createUser({
                username: payload.name,
                accounts: [{ uuid: userId, type: AccountType.GOOGLE }],
            });
        }

        return {
            token: this.authService.createToken(user),
        };
    }

    @Get('check')
    @UseGuards(AuthGuard('jwt'))
    async check(): Promise<void> {}
}
