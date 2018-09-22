import { AccountType } from '../account.type'

export interface CreateUserDto {
  readonly username: string;
  readonly accounts?: { type: AccountType; uuid: string }[];
}
