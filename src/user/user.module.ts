import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './user.resolver';
import { ProviderModule } from 'provider/provider.module';

@Module({
  imports: [PrismaModule, ProviderModule],
  providers: [UserResolver],
})
export class UserModule {}
