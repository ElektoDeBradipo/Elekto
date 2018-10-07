import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    PrismaModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secretOrPrivateKey: configService.jwtSecret,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthResolver],
})
export class AuthModule {}
