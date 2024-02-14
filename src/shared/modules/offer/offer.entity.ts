import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/index.js';
import { AppartmentType, City, Coordinates, Facilities } from '../../types/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {

  @prop({
    trim: true,
    required: true
  })
  public title!: string;

  @prop({
    trim: true,
    required: true
  })
  public description!: string;

  @prop({
    required: true
  })
  public postDate!: Date;

  @prop({
    required: true,
    type: () => String,
    enum: City
  })
  public city!: City;

  @prop({
    required: true
  })
  public previewImg!: string;

  @prop({
    required: true
  })
  public images!: string[];

  @prop({
    required: true
  })
  public isPremium!: boolean;

  @prop({
    required: true
  })
  public isFavorite!: boolean;

  @prop({
    required: true
  })
  public rating!: number;

  @prop({
    required: true,
    enum: AppartmentType,
    type: () => String,
  })
  public type!: AppartmentType;

  @prop({
    required: true
  })
  public rooms!: number;

  @prop({
    required: true
  })
  public guests!: number;

  @prop({
    required: true
  })
  public price!: number;


  @prop({ default: 0 })
  public commentCount!: number;

  @prop({
    required: true,
    enum: Facilities,
    type: () => String,
  })
  public facilities!: Facilities[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public authorId!: Ref<UserEntity>;

  @prop({
    required: true,
    type: () => Object,
  })
  public coordinates!: Coordinates;
}

export const OfferModel = getModelForClass(OfferEntity);
