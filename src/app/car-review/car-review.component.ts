import {Component, Input, OnInit} from '@angular/core';
import {Car, CAR_ID_SYM} from '../share/models/cars.interface';
import {ReviewService} from '../share/review-service/review.service';
import {Review, ReviewCategory, ReviewType} from '../share/models/review.interface';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.scss'],
  providers: [
    ReviewService
  ]
})
export class CarReviewComponent implements OnInit {
  @Input() car: Car;
  reviewCategories: Array<ReviewCategory>;
  reviewsMap: Map<ReviewCategory, Array<Review>>;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getAllReviewsCategoryType().flatMap((revCats: Array<ReviewCategory>) => {
      this.reviewCategories = revCats;
      return this.reviewService.getReviews(this.car[CAR_ID_SYM]);
    }).subscribe((revs: Array<Review>) => {
      this.reviewsMap = new Map();
      for (const review of revs) {
        const reviewCategory = this.reviewCategories.filter((value) => value.id === review.category)[0];
        if (!this.reviewsMap.get(reviewCategory)) {
          this.reviewsMap.set(reviewCategory, []);
        }
        this.reviewsMap.get(reviewCategory).push(review);
      }
    });
  }

  getReviewType(category: ReviewCategory, review: Review): ReviewType {
    return category.reviews.filter((reviewType: ReviewType) => review.id === reviewType.id)[0];
  }

}
