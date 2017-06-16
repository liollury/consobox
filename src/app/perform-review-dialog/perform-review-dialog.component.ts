import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Review, ReviewHistory, ReviewType} from '../share/models/review.interface';
import {Car} from '../share/models/cars.interface';

@Component({
  selector: 'app-perform-review-dialog',
  templateUrl: './perform-review-dialog.component.html',
  styleUrls: ['./perform-review-dialog.component.scss']
})
export class PerformReviewDialogComponent implements OnInit {
  review: Review;
  reviewType: ReviewType;
  car: Car;
  instance: ReviewHistory;

  constructor(public dialogRef: MdDialogRef<ReviewHistory>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    this.review = data.review;
    this.reviewType = data.reviewType;
    this.car = data.car;
    this.instance = new ReviewHistory();
    this.instance.date = new Date();
    this.instance.mileage = Math.round(this.car.mileage);
    this.instance.price = 0;
  }

  ngOnInit() {
  }


  valide() {
    this.instance.date = Math.floor((<Date>this.instance.date).getTime() / 1000);
    this.instance.mileage = parseInt(String(this.instance.mileage), 10);
    this.instance.price = parseInt(String(this.instance.price), 10);
    this.dialogRef.close(this.instance);
  }
}
