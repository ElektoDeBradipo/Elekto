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
import { AuthService } from './auth.service';

@Resolver('AuthPayload')
export class AuthResolver {
  constructor(private jwt: JwtService, private prisma: PrismaService, private auth: AuthService) {}

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

    

    return this.auth.generateJwtToken(user);
  }

  @Mutation()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Info() info,
  ): Promise<IAuthPayload> {
    const hash = createHash('sha256');
    let user: User = await this.prisma.query.user({ where: { email } });

    if (!user || user.password != <string>hash.update(password).digest('hex'))
      throw new Error('Email or password wrong !');

    return this.auth.generateJwtToken(user);
  }
}
