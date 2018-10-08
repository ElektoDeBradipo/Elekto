import { IUser } from '../user/user.interface';

export class IAuthPayload {
  token: string;
  user: IUser;
}

export class JwtPayload {
  id: string;
  email: string;
  iat: Date;
}
