import {Component, Input, OnInit} from '@angular/core';
import {Review, ReviewCategory, ReviewType, ReviewTypeFuel} from '../share/models/review.interface';
import {Car, CAR_ID_SYM} from '../share/models/cars.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {CarsService} from '../share/cars-service/cars.service';

@Component({
  selector: 'app-car-add-review',
  templateUrl: './car-add-review.component.html',
  styleUrls: ['./car-add-review.component.scss']
})
export class CarAddReviewComponent implements OnInit {
  car: Car;
  reviewCategories: ReviewCategory[];
  activeReviews: Array<boolean>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarsService) { }

  ngOnInit() {
    this.car = this.route.snapshot.data.car;
    this.reviewCategories = this.route.snapshot.data.reviewCategories;
    this.activeReviews = [];
    if (!this.car.reviews) {
      this.car.reviews = [];
    }
    this.car.reviews.map((review: Review) => {
      this.activeReviews[review.id] = true;
      return review;
    });

  }

  goBack() {
    this.router.navigate(['car', this.car[CAR_ID_SYM]]);
  }

  saveChanges() {
    // remove disabled reviews
    this.car.reviews = this.car.reviews.filter((review: Review) => this.activeReviews[review.id]);

    // add new reviews
    this.reviewCategories.forEach((category: ReviewCategory) => {
      category.reviews.forEach((review: ReviewType) => {
        if (this.activeReviews[review.id] && !this.car.hasReview(review.id)) {
          this.car.reviews.push(this.createReview(review, review.fuel[this.car.fuel.id]));
        }
      });
    });
    this.carService.saveReviews(this.car).subscribe(() => this.goBack());
  }

  createReview(reviewType: ReviewType, reviewFuelType: ReviewTypeFuel): Review {
    const review: Review = new Review();
    review.id = reviewType.id;
    review.mileage = reviewFuelType.mileage;
    review.interval = reviewFuelType.interval;
    review.history = [];
    return review;
  }

}
