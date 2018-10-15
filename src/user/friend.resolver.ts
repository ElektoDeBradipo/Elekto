import { Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { ProviderService } from '../provider/provider.service';
import { UserPropertyResolver } from './user-property.resolver';

@Resolver('Friend')
export class FriendResolver extends UserPropertyResolver {
  constructor(prisma: PrismaService, provider: ProviderService) {
    super(prisma, provider);
  }
}
