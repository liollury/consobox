import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../share/models/cars.interface';
import {ReviewService} from '../share/review-service/review.service';
import {Review, ReviewCategory, ReviewHistory, ReviewType} from '../share/models/review.interface';
import "rxjs/add/operator/mergeMap";
import {MdDialog} from '@angular/material';
import {PerformReviewDialogComponent} from '../perform-review-dialog/perform-review-dialog.component';
import {CarsService} from '../share/cars-service/cars.service';
import * as moment from 'moment';

@Component({
  selector   : 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls  : ['./car-review.component.scss']
})
export class CarReviewComponent implements OnInit {
  @Input() car: Car;
  reviewCategories: Array<ReviewCategory>;
  reviewsMap: Map<ReviewCategory, Array<Review>>;
  criticalReview: Review;

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
            foundRev[0].reviewType = reviewType;
            foundRev[0].computeLastestHistory(this.car.mileage);
            this.reviewsMap.get(category).push(foundRev[0]);
          }
        });
      });
      this.findCriticalestReview();
    });
  }

  getReviewType(category: ReviewCategory, review: Review): ReviewType {
    return category.reviews.filter((reviewType: ReviewType) => review.id === reviewType.id)[0];
  }

  getReviewShortestDeadline(review: Review): string {
    if (!review || typeof review.percentCompleteDelay === 'undefined') {
      return 'Pas de données';
    }
    if (review.percentCompleteDelay > review.percentCompleteKm) {
      return `${review.lastReviewDelay}Mois`;
    } else {
      return `${review.lastReviewKm.toFixed(0)}Km`;
    }
  }

  getReviewShortestDeadlinePercent(review: Review): number {
    if (!review || typeof review.percentCompleteDelay === 'undefined') {
      return 0;
    }
    if (review.percentCompleteDelay > review.percentCompleteKm) {
      return Math.round(review.percentCompleteDelay * 100);
    } else {
      return Math.round(review.percentCompleteKm * 100);
    }
  }

  getReviewColor(review: Review): string {
    const percent = this.getReviewShortestDeadlinePercent(review);
    if (percent < 50) {
      return '';
    }else if (percent >= 50 && percent < 65) {
      return 'green'
    }else if (percent >= 65 && percent < 80) {
      return 'orange'
    }else {
      return 'red'
    }
  }

  findCriticalestReview() {
    let reviews = [];
    let criticalPercent = -1;
    for (const arr of Array.from(this.reviewsMap.values())) {
      reviews = [...reviews, ...arr];
    }
    for (const review of reviews) {
      const percent = this.getReviewShortestDeadlinePercent(review);
      if (percent > criticalPercent) {
        this.criticalReview = review;
        criticalPercent = percent;
      }
    }
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
      review.computeLastestHistory(this.car.mileage);
      this.carService.saveReviews(this.car).subscribe();
    });
  }

}
