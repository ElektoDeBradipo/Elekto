import { Module } from '@nestjs/common'
import { TraktModule } from '../trakt/trakt.module'
import { UserModule } from '../user/user.module'
import { MovieResolver } from './movie.resolver'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [GraphQLModule, TraktModule, UserModule],
  providers: [MovieResolver],
  })
export class MovieModule {}
