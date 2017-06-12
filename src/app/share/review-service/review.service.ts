import {Injectable} from '@angular/core';
import {Review, ReviewCategory} from '../models/review.interface';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class ReviewService {
  reviewsMock: Array<Review>;

  constructor(private db: AngularFireDatabase) {

    this.reviewsMock = [
      {
        id      : 0,
        mileage : 15000,
        interval: 32
      },
      {
        id      : 0,
        mileage : 15000,
        interval: 24
      },
      {
        id      : 1,
        mileage : 10000,
        interval: 32
      },
      {
        id      : 1,
        mileage : 10000,
        interval: 32
      }
    ];
  }

  getAllReviewsCategoryType(): Observable<Array<ReviewCategory>> {
    return this.db.list('/reviewCategories');
  }

}
