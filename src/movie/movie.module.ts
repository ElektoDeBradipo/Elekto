import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProviderModule } from '../provider/provider.module';
import { MovieResolver } from './movie.resolver';
import { UserMovieResolver } from './user-movie.resolver';

@Module({
  imports: [ProviderModule, PrismaModule],
  providers: [MovieResolver, UserMovieResolver],
})
export class MovieModule {}
