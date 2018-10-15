import { Parent, ResolveProperty } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';

export class MoviePropertyResolver {
  constructor(
    protected readonly provider: ProviderService,
    protected readonly prisma: PrismaService,
  ) {}

  @ResolveProperty()
  async title(@Parent() { id }): Promise<string> {
    return (await this.provider.getMovie(id)).title;
  }

  @ResolveProperty()
  async overview(@Parent() { id }): Promise<string> {
    return (await this.provider.getMovie(id)).overview;
  }

  @ResolveProperty()
  async releaseDate(@Parent() { id }): Promise<string> {
    return (await this.provider.getMovie(id)).releaseDate;
  }
}
