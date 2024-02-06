import { User } from './index.js';

export class Comment {
  text: string;
  postDate: Date;
  rating: number;
  author: User;
}
