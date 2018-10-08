import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { IUserPartial } from '../user/user.interface';
import { JwtPayload } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}

  signIn(user: User): string {
    if (!user) throw new Error('user is null');

    return this.jwt.sign({
      id: user.id,
      email: user.email,
    });
  }

  async validateUser(token: JwtPayload): Promise<IUserPartial> {
    return <IUserPartial>(
      await this.prisma.query.user({ where: { id: token.id } })
    );
  }
}
