import { Injectable } from '@nestjs/common'
import * as Trakt from 'trakt.tv'
import { ConfigService } from '../config/config-service'

@Injectable()
export class TraktService {
  private readonly trakt;
  constructor (private config: ConfigService) {
    this.trakt = new Trakt({
      client_id: this.config.get('TRAKT_CLIENT_ID'),
      client_secret: this.config.get('TRAKT_CLIENT_SECRET'),
      redirect_uri: `${this.config.apiUrl}/trakt/callback`
    })
  }
}
