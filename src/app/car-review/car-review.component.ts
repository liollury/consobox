import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../share/models/cars.interface';
import {ReviewService} from '../share/review-service/review.service';
import {Review, REVIEW_TYPE_SYM, ReviewCategory, ReviewHistory, ReviewType} from '../share/models/review.interface';
import "rxjs/add/operator/mergeMap";
import {MdDialog} from '@angular/material';
import {PerformReviewDialogComponent} from '../perform-review-dialog/perform-review-dialog.component';
import {CarsService} from '../share/cars-service/cars.service';

@Component({
  selector   : 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls  : ['./car-review.component.scss']
})
export class CarReviewComponent implements OnInit {
  @Input() car: Car;
  reviewCategories: Array<ReviewCategory>;
  reviewsMap: Map<ReviewCategory, Array<Review>>;

  constructor(private reviewService: ReviewService,
              private carService: CarsService,
              private dialog: MdDialog) {
  }

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

  performReview(review: Review, reviewType: ReviewType) {
    const dialogRef = this.dialog.open(PerformReviewDialogComponent, {
      data: {
        review    : review,
        reviewType: reviewType,
        car       : this.car
      }
    });
    dialogRef.afterClosed().subscribe((reviewHistory: ReviewHistory) => {
      if (!review.history) {
        review.history = [];
      }
      review.history.push(reviewHistory);
      this.carService.saveReviews(this.car).subscribe();
    });
  }

}
