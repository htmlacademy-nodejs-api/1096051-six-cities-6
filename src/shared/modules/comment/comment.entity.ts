import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface CommentEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'comments',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class CommentEntity extends defaultClasses.TimeStamps {

  @prop({
    trim: true,
    required: true
  })
  public text!: string;

  @prop({
    required: true
  })
  public commentDate!: Date;

  @prop({
    required: true
  })
  public rating!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public authorId!: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
