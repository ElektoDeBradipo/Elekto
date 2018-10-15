import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProviderModule } from '../provider/provider.module';
import { FriendResolver } from './friend.resolver';
import { UserResolver } from './user.resolver';

@Module({
  imports: [PrismaModule, ProviderModule],
  providers: [UserResolver, FriendResolver],
})
export class UserModule {}
