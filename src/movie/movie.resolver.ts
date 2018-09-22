import { Resolver, ResolveProperty, Query } from '@nestjs/graphql';
import { TraktService } from '../trakt/trakt-service';

@Resolver('MovieIdeas')
export class MovieResolver {
    constructor(private readonly traktService: TraktService) {}

    @Query('movies')
    async getMovies(obj, args, context, info) {
        const { ids } = args;
        return { ids };
    }

    @ResolveProperty('watchlisted')
    async getWatchlisted(obj, args, context, info) {
        // const { id } = author;
        console.log(obj);
        return [{ title: 'ssfsdf' }];
    }
}
