import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import * as Strategy from 'passport-trakt'
import { ConfigService } from '../config/config-service'

@Injectable()
export class TraktStrategy extends PassportStrategy(Strategy) {
  constructor (private config: ConfigService) {
    super({
      clientID: config.get('TRAKT_CLIENT_ID'),
      clientSecret: config.get('TRAKT_CLIENT_SECRET'),
      callbackURL: `${config.apiUrl}/trakt/callback`
    })
    // this.logger.log(`${config.apiUrl}/trakt/callback`);
  }

  async validate (
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: Function
  ) {
    // this.logger.log(`${accessToken} ${refreshToken} ${profile}`);
    // const user = await this.authService.validateUser(payload);
    // if (!user) {
    //   return done(new UnauthorizedException(), false);
    // }
    done(null, profile)
  }
}
