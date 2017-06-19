import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Review, ReviewType} from '../share/models/review.interface';
import {Car} from '../share/models/cars.interface';
import {CarsService} from '../share/cars-service/cars.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {
  car: Car;
  reviewType: ReviewType;
  review: Review;
  originalReview$: Review;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarsService) { }

  ngOnInit() {
    this.car = this.route.snapshot.data.car;
    this.reviewType = this.route.snapshot.data.reviewType;
    this.originalReview$ = this.car.reviews.filter((review: Review) => this.reviewType.id === review.id)[0];
    this.review = {...this.originalReview$};
  }

  goBack() {
    this.router.navigate(['car', this.car.id]);
  }

  saveChanges() {
    Object.assign(this.originalReview$, this.review);
    this.carService.saveReviews(this.car).subscribe(() => this.goBack());
  }
}
