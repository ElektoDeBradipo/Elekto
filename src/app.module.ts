import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { RoomModule } from './room/room.module';
import { ProviderModule } from './provider/provider.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot({
      typePaths: ['./src/**/*.graphql'],
    }),
    PrismaModule,
    UserModule,
    MovieModule,
    AuthModule,
    RoomModule,
    ProviderModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
