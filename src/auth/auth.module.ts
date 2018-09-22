import { Module } from '@nestjs/common'
import { ConfigModule } from '../config/config.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { UserModule } from '../user/user.module'

@Module({
  imports: [ConfigModule, UserModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  })
export class AuthModule {}
