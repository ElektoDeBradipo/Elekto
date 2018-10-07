import { Resolver, Mutation, Args, Info } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../prisma/prisma.binding';
import { IUser, IAuthPayload } from './auth.interface';

@Resolver('AuthPayload')
export class AuthResolver {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}

  @Mutation()
  signup(
    @Args('nickname') nickname: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    console.log('signup');
  }

  @Mutation()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Info() info,
  ): Promise<IAuthPayload> {
    console.log('login');
    let user: User = await this.prisma.query.user({ where: { email } });

    if (!user || user.password != password)
      throw new Error('Email or password wrong !');

    let token: string = this.jwt.sign({
      id: user.id,
      email: user.email,
    });

    return { token, user: <IUser>user };
  }
}
