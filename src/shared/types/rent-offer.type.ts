import { User, Coordinates } from './index.js';

export type RentOffer = {
  title: string,
  description: string,
  postDate: Date,
  city: string,
  previewImg: string,
  images: string[],
  isPremium: boolean,
  rating: number,
  type: string,
  rooms: number,
  guests: number,
  price: number,
  benefits: string[],
  author: User,
  comments: number,
  coordinates: Coordinates
}

