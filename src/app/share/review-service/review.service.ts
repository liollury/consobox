import { Injectable } from '@angular/core';
import {ReviewCategory, ReviewType} from '../models/review.interface';
import {Observable} from 'rxjs/Observable';
import {FUEL} from '../models/fuel.enum';

@Injectable()
export class ReviewService {
  reviewCategoryTypeMock: Array<ReviewCategory>;

  constructor() {
    this.reviewCategoryTypeMock = [
      {
        id: 0,
        name: 'Filtration',
        reviews: [
          {
            id: 0,
            name: 'Filtre à huile',
            fuel: [
              {
                type: FUEL.GASOLINE,
                mileage: 10000,
                interval: 24
              }
            ]
          }
        ]
      }
    ]
  }

  getAllReviewsCategoryType(): Observable<Array<ReviewCategory>> {
    return Observable.of(this.reviewCategoryTypeMock);
  }

}
