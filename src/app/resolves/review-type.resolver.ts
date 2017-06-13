import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CarsService} from '../share/cars-service/cars.service';
import {Car} from '../share/models/cars.interface';
import {Observable} from 'rxjs/Observable';
import {ReviewService} from '../share/review-service/review.service';
import {ReviewCategory, ReviewType} from '../share/models/review.interface';

@Injectable()
export class ReviewTypeResolver implements Resolve<ReviewType> {
  constructor(private reviewService: ReviewService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ReviewType> {
    return this.reviewService.getAllReviewsCategoryType().first().mergeMap((reviewCategories: ReviewCategory[]) => {
      for (const category of reviewCategories) {
        const revFilter = category.reviews.filter((reviewType: ReviewType) => reviewType.id === parseInt(route.params.revId, 10));
        if (revFilter.length > 0) {
          return Observable.of(revFilter[0]);
        }
      }
    });
  }
}
