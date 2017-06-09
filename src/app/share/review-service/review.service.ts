import {Injectable} from '@angular/core';
import {Review, ReviewCategory} from '../models/review.interface';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class ReviewService {
  reviewCategoryTypeMock: Array<ReviewCategory>;
  reviewsMock: Array<Review>;

  items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.reviewCategoryTypeMock = [
      {
        id     : 0,
        name   : 'Filtration',
        icon   : 'build',
        reviews: [
          {
            id  : 0,
            name: 'Filtre à huile',
            fuel: [
              {
                type    : 0,
                mileage : 10000,
                interval: 24
              }
            ]
          },
          {
            id  : 1,
            name: 'Filtre à air',
            fuel: [
              {
                type    : 0,
                mileage : 12000,
                interval: 12
              }
            ]
          }
        ]
      },
      {
        id     : 1,
        name   : 'Vidanges',
        icon   : 'build',
        reviews: [
          {
            id  : 0,
            name: 'Huile',
            fuel: [
              {
                type    : 0,
                mileage : 10000,
                interval: 24
              }
            ]
          },
          {
            id  : 1,
            name: 'Liquide de freins',
            fuel: [
              {
                type    : 0,
                mileage : 12000,
                interval: 12
              }
            ]
          }
        ]
      }
    ];

    this.reviewsMock = [
      {
        id      : 0,
        category: 0,
        mileage : 15000,
        interval: 32
      },
      {
        id      : 0,
        category: 1,
        mileage : 15000,
        interval: 24
      },
      {
        id      : 1,
        category: 1,
        mileage : 10000,
        interval: 32
      },
      {
        id      : 1,
        category: 1,
        mileage : 10000,
        interval: 32
      }
    ];
  }

  getAllReviewsCategoryType(): Observable<Array<ReviewCategory>> {
    return Observable.of(this.reviewCategoryTypeMock);
  }

  getReviews(carId: number): Observable<Array<Review>> {
    return Observable.of(this.reviewsMock);
  }

}
