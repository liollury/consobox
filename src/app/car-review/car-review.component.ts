import {Component, Input, OnInit} from '@angular/core';
import {Car, CAR_ID_SYM} from '../share/models/cars.interface';
import {ReviewService} from '../share/review-service/review.service';
import {Review, REVIEW_TYPE_SYM, ReviewCategory, ReviewType} from '../share/models/review.interface';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.scss']
})
export class CarReviewComponent implements OnInit {
  @Input() car: Car;
  reviewCategories: Array<ReviewCategory>;
  reviewsMap: Map<ReviewCategory, Array<Review>>;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getAllReviewsCategoryType().subscribe((revCats: Array<ReviewCategory>) => {
      this.reviewCategories = revCats;
      this.reviewsMap = new Map();
      this.reviewCategories.forEach((category: ReviewCategory) => {
        this.reviewsMap.set(category, []);
        category.reviews.forEach((reviewType: ReviewType) => {
          const foundRev = this.car.reviews.filter((review: Review) => review.id === reviewType.id);
          if (foundRev.length !== 0) {
            foundRev[0][REVIEW_TYPE_SYM] = reviewType;
            this.reviewsMap.get(category).push(foundRev[0]);
          }
        });
      });
    });
  }

  getReviewType(category: ReviewCategory, review: Review): ReviewType {
    return category.reviews.filter((reviewType: ReviewType) => review.id === reviewType.id)[0];
  }

  addReview() {

  }

}
