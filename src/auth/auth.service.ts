import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserNode } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { JwtPayload } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}

  signIn(user: UserNode): string {
    if (!user) throw new Error('user is null');

    return this.jwt.sign({
      id: user.id,
      email: user.email,
    });
  }

  async validateUser(token: JwtPayload): Promise<UserNode> {
    return await this.prisma.r.user({ id: token.id });
  }
}
