import { AppartmentType, City, Coordinates, Facilities } from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: City;
  public previewImg: string;
  public images: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: AppartmentType;
  public rooms: number;
  public guests: number;
  public price: number;
  public facilities: Facilities[];
  public authorId: string;
  public coordinates: Coordinates;
}

