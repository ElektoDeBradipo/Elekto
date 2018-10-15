import { Module, CacheModule } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { TmdbProvider } from './tmdb.provider';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, CacheModule.register({ ttl: 30 })],
  providers: [ProviderService, TmdbProvider],
  exports: [ProviderService],
})
export class ProviderModule {}
