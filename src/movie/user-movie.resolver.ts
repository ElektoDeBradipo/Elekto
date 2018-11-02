import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Movie, UserMovie } from '../app.interface';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { User } from '../user/user.decorator';
import { MoviePropertyResolver } from './movie-property.resolver';

@UseGuards(GqlAuthGuard)
@Resolver('UserMovie')
export class UserMovieResolver extends MoviePropertyResolver {
  constructor(provider: ProviderService, prisma: PrismaService) {
    super(provider, prisma);
  }

  @Query()
  async movieUser(@Args('id') id: string, @User() user): Promise<UserMovie> {
    const movie = await this.provider.getMovie(id);
    if (!movie) return null;
    return await this.getUserMovie(movie, user);
  }

  @Query()
  async moviesUser(
    @Args('search') search: string,
    @User() user,
  ): Promise<Partial<UserMovie>[]> {
    if (!search || search.length < 2) return [];
    const movies = await this.provider.searchMovie(search);
    return Promise.all(
      movies.map(async movie => this.getUserMovie(movie, user)),
    );
  }

  private async getUserMovie(
    movie: Movie,
    user: { id: string },
  ): Promise<UserMovie> {
    const movieLinks = await this.prisma.r.movieLinks({
      where: { user: { id: user.id }, movie: { id: movie.id } },
    });
    const movieLink = movieLinks.length > 0 && movieLinks[0];
    return {
      ...movie,
      watched: movieLink && movieLink.watched,
      watchlisted: movieLink && movieLink.watchlisted,
    };
  }
}
