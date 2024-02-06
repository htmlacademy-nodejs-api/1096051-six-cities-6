import { AppartmentType, City, Facilities, RentOffer, UserType } from '../types/index.js';

export function createOffer(offerData: string): RentOffer {
  const [
    title,
    description,
    postDate,
    city,
    previewImg,
    images,
    isPremium,
    isFavorite,
    rating,
    type,
    rooms,
    guests,
    price,
    facilities,
    commentsCount,
    name,
    email,
    avatar,
    password,
    userType,
    latitude,
    longitude,
  ] = offerData.replace('\n', '').split('\t');

  const author = {
    name,
    email,
    avatar,
    password,
    type: UserType[userType as keyof typeof UserType],
  };

  const coordinates = {
    latitude: Number.parseFloat(latitude),
    longitude: Number.parseFloat(longitude)
  };

  return {
    title,
    description,
    postDate: new Date (postDate),
    city: City[city as keyof typeof City],
    previewImg,
    images: images.split(','),
    isPremium: Boolean(isPremium),
    isFavorite: Boolean(isFavorite),
    rating: Number.parseFloat(rating),
    type: AppartmentType[type as keyof typeof AppartmentType],
    rooms: Number.parseInt(rooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(',').map((item) => Facilities[item as keyof typeof Facilities]),
    commentsCount: Number.parseInt(commentsCount, 10),
    coordinates,
    author,
  };
}
