import {Injectable} from '@angular/core';
import {Review, ReviewCategory} from '../models/review.interface';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class ReviewService {
  reviewCategoryObserbable$: Observable<ReviewCategory[]>;

  constructor(private db: AngularFireDatabase) {

  }

  getAllReviewsCategoryType(): Observable<Array<ReviewCategory>> {
    if (!this.reviewCategoryObserbable$) {
      this.reviewCategoryObserbable$ = this.db.list('/reviewCategories');
    }
    return this.reviewCategoryObserbable$;
  }

}
