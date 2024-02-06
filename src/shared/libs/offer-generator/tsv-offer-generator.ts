import dayjs from 'dayjs';
import { OfferGenerator } from './index.js';
import { MockServerData } from '../../types/index.js';
import { generateRandomBoolean, generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';
import { randomUUID } from 'node:crypto';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const MIN_RATING = 0;
const MAX_RATING = 5;

const MIN_ROOMS = 1;
const MAX_ROOMS = 8;

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const Coordinates = {
  Latitude: {
    Min: 48,
    Max: 54
  },
  Longitude: {
    Min: 2,
    Max: 10
  }
};

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.previewImages);
    const isPremium = generateRandomBoolean().toString();
    const isFavorite = generateRandomBoolean().toString();
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const rooms = generateRandomValue(MIN_ROOMS, MAX_ROOMS).toString();
    const guests = generateRandomValue(MIN_GUESTS, MAX_GUESTS).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const facilities = getRandomItems<string>(this.mockData.facilities);
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = randomUUID();
    const userType = getRandomItem<string>(this.mockData.userTypes);
    const latitude = generateRandomValue(Coordinates.Latitude.Min, Coordinates.Latitude.Max);
    const longitude = generateRandomValue(Coordinates.Longitude.Min, Coordinates.Longitude.Max);
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    return [
      title, description, postDate,
      city, previewImage, images,
      isPremium, isFavorite, rating, type,
      rooms, guests, price, facilities,
      name, email, avatar, password,
      userType, latitude, longitude
    ].join('\t');
  }
}
