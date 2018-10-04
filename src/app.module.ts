import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { LibraryModule } from './library/library.module';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    PrismaModule,
    UserModule,
    LibraryModule,
    MovieModule,
    AuthModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
