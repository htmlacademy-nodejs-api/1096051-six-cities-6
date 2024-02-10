import { getModelForClass, prop } from '@typegoose/typegoose';
import { User, UserType } from '../../types/index.js';

const MIN_NAME_LENGTH = 1;
const MAX_NAME_LENGTH = 15;

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 12;

export class UserEntity implements User {
  @prop({ required: true, minlength: [MIN_NAME_LENGTH, `Min user name length ${MIN_NAME_LENGTH}`], maxlength: [MAX_NAME_LENGTH, `Max user name length ${MAX_NAME_LENGTH}`]})
  public name: string;

  @prop({ unique: true, required: true, match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'] })
  public email: string;

  @prop({ match: [/[^\s]+(.*?).(jpg|png|JPG|PNG)$/, 'Image is incorrect'] })
  public avatar: string;

  @prop({ required: true, minlength: [MIN_PASSWORD_LENGTH, `Min user name length ${MIN_PASSWORD_LENGTH}`], maxlength: [MAX_PASSWORD_LENGTH, `Max user name length ${MAX_PASSWORD_LENGTH}`]})
  public password: string;

  @prop({ required: true })
  public type: UserType;
}

export const UserModal = getModelForClass(UserEntity);
