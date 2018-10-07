import {
  Resolver,
  Mutation,
  Args,
  Info,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../prisma/prisma.binding';
import { IUser, IAuthPayload } from './auth.interface';
import { createHash } from 'crypto';

@Resolver('AuthPayload')
export class AuthResolver {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}

  @Mutation()
  async signup(
    @Args('nickname') nickname: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Info() info,
  ): Promise<IAuthPayload> {
    const hash = createHash('sha256');
    let regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //test email format
    if (!regex.test(email.toLowerCase())) throw new Error('Email is invalid !');

    //request mutation
    password = <string>hash.update(password).digest('hex');
    let user: User = await this.prisma.mutation.createUser({
      data: { email, password, firstName, lastName, nickname },
    });
    if (!user) throw new Error('create user failed ! ');

    let token: string = this.jwt.sign({
      id: user.id,
      email,
    });
    return { token, user: <IUser>user };
  }

  @Mutation()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Info() info,
  ): Promise<IAuthPayload> {
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
