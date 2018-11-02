import { Args, Query, Resolver } from '@nestjs/graphql';
import { Movie } from '../app.interface';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { MoviePropertyResolver } from './movie-property.resolver';

@Resolver('Movie')
export class MovieResolver extends MoviePropertyResolver {
  constructor(provider: ProviderService, prisma: PrismaService) {
    super(provider, prisma);
  }

  @Query()
  async movie(@Args('id') id: string): Promise<Movie> {
    return await this.provider.getMovie(id);
  }

  @Query()
  async movies(@Args('search') search: string): Promise<Movie[]> {
    if (!search || search.length < 2) return [];
    return await this.provider.searchMovie(search);
  }
}
