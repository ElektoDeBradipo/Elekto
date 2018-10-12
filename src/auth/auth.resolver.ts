import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';
import { UserNode } from '../prisma/prisma.binding';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from './auth.service';

@Resolver('AuthPayload')
export class AuthResolver {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
    private auth: AuthService,
  ) {}

  @Mutation()
  async signup(
    @Args('nickname') nickname: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Info() info,
  ): Promise<{ token: string; user: UserNode }> {
    const hash = createHash('sha256');
    let regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //test email format
    if (!regex.test(email.toLowerCase())) throw new Error('Email is invalid !');

    //request mutation
    password = <string>hash.update(password).digest('hex');
    let user = await this.prisma.r.createUser({
      email,
      password,
      firstName,
      lastName,
      nickname,
    });
    if (!user) throw new Error('create user failed ! ');

    const token = this.auth.signIn(user);
    return { token, user };
  }

  @Mutation()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Info() info,
  ): Promise<{ token: string; user: UserNode }> {
    const hash = createHash('sha256');
    const user = await this.prisma.r.user({ email });

    if (!user || user.password != <string>hash.update(password).digest('hex'))
      throw new Error('Email or password wrong !');

    const token = this.auth.signIn(user);
    return { token, user };
  }
}
