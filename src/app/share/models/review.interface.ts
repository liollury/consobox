import {FUEL} from './fuel.enum';
export interface ReviewCategory {
  id: number;
  name: string;
  reviews: Array<ReviewType>;
}

export interface ReviewType {
  id: number;
  name: string;
  fuel: {
    type: FUEL;
    mileage: number;
    interval: number;
  }
}

export interface Review {
  id: number;
  name: string;
  mileage: number;
  interval: number;
}
