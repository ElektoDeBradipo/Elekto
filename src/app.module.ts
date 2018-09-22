import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { MovieModule } from 'movie/movie.module'
import { ShowModule } from 'show/show.module'
import { AuthModule } from 'auth/auth.module'
import { RoomModule } from './room/room.module'

@Module({
  imports: [
  AuthModule,
  MovieModule,
  ShowModule,
  TypeOrmModule.forRoot(),
  GraphQLModule,
  RoomModule,
  ],
  })
export class AppModule implements NestModule {
  constructor (private readonly graphQLFactory: GraphQLFactory) {}

  configure (consumer: MiddlewareConsumer) {
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql')
    const schema = this.graphQLFactory.createSchema({ typeDefs })

    consumer
      .apply(graphiqlExpress({ endpointURL: '/graphql' }))
      .forRoutes('/graphiql')
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes('/graphql')
  }
}
