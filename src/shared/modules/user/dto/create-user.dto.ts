import { UserType } from '../../../types/index.js';

export class CreateUserDto {
  public email: string;
  public name: string;
  public avatar: string;
  public password: string;
  public type: UserType;
}
