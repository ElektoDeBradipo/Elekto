import { Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { MoviePropertyResolver } from './movie-property.resolver';

@Resolver('Movie')
export class MovieResolver extends MoviePropertyResolver {
  constructor(provider: ProviderService, prisma: PrismaService) {
    super(provider, prisma);
  }
}
