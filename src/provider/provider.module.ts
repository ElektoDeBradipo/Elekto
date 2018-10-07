import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { TmdbProvider } from './tmdb.provider';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProviderService, TmdbProvider],
  exports: [ProviderService],
})
export class ProviderModule {}
