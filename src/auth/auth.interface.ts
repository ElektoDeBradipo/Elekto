export class IUser {
  nickname: String;
  email: String;
  firstName: String;
  lastName: String;
}

export class IAuthPayload {
  token: string;
  user: IUser;
}

export class IUserToken{
  id: string
  email: string
}
