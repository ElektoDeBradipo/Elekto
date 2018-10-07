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
