import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProviderModule } from './provider/provider.module';
import { RoomModule } from './room/room.module';
import { SchemaModule } from './schema/schema.module';
import { SchemaService } from './schema/schema.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRootAsync({
      imports: [SchemaModule],
      useFactory: async (schemaService: SchemaService) => {
        const schema = await schemaService.transpileSchema('./src/app.graphql');
        return { typeDefs: [schema], context: ({ req }) => ({ req }) };
      },
      inject: [SchemaService],
    }),
    PrismaModule,
    UserModule,
    MovieModule,
    AuthModule,
    RoomModule,
    ProviderModule,
    CommonModule,
    SchemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
