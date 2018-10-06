import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { TmdbProvider } from './tmdb.provider';

@Module({
  providers: [ProviderService, TmdbProvider],
  exports: [ProviderService],
})
export class ProviderModule {}
