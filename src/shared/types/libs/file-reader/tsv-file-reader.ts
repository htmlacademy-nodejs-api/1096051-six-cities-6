import { readFileSync } from 'node:fs';
import { FileReader } from './file-reader.interface.js';
import { Offer } from '../../offer-type.js';
import { OfferType } from '../../offer-type.enum.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, {encoding: 'utf-8'});
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, createDate, image, type, price, categories, firstname, lastname, email, avatarPath]) => ({
        title,
        description,
        postDate: new Date(createDate),
        image,
        type: OfferType[type as 'Buy' | 'Sell'],
        categories: categories.split(';')
          .map((name) => ({name})),
        price: Number.parseInt(price, 10),
        user: { email, firstname, lastname, avatarPath }
      }));
  }
}
