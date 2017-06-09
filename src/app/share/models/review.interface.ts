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
        type: number;
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
