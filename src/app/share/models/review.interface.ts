import {FUEL} from './fuel.enum';
export interface ReviewCategory {
  id: number;
  name: string;
  icon: string;
  reviews: Array<ReviewType>;
}

export interface ReviewType {
  id: number;
  name: string;
  fuel: [
      {
        type: FUEL;
        mileage: number;
        interval: number;
      }
    ]
}

export interface Review {
  id: number;
  category: number;
  mileage: number;
  interval: number;
}
