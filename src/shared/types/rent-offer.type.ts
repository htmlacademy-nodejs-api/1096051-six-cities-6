import { User, Coordinates, City, AppartmentType, Facilities } from './index.js';

export type RentOffer = {
  title: string,
  description: string,
  postDate: Date,
  city: City,
  previewImg: string,
  images: string[],
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  type: AppartmentType,
  rooms: number,
  guests: number,
  price: number,
  facilities: Facilities[],
  author: User,
  coordinates: Coordinates,
}

