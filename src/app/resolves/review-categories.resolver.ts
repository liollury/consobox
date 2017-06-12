import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CarsService} from '../share/cars-service/cars.service';
import {Car} from '../share/models/cars.interface';
import {Observable} from 'rxjs/Observable';
import {ReviewService} from '../share/review-service/review.service';
import {ReviewCategory} from '../share/models/review.interface';

@Injectable()
export class ReviewCategoriesResolver implements Resolve<ReviewCategory[]> {
  constructor(private reviewService: ReviewService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ReviewCategory[]> {
    return this.reviewService.getAllReviewsCategoryType().first();
  }
}
