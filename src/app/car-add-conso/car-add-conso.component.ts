import { Component, OnInit } from '@angular/core';
import {Conso} from '../share/models/conso.interface';
import * as moment from 'moment';
import {Car} from '../share/models/cars.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {CarsService} from '../share/cars-service/cars.service';

@Component({
  selector: 'app-car-add-conso',
  templateUrl: './car-add-conso.component.html',
  styleUrls: ['./car-add-conso.component.scss']
})
export class CarAddConsoComponent implements OnInit {
  car: Car;
  conso: Conso;
  counterMileage: boolean;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private carsService: CarsService) {
    this.conso = new Conso();
    this.conso.mileage = 0;
    this.conso.date = new Date();
    this.conso.volume = 0;
    this.conso.full = false;
    this.conso.price = 0.0;
  }

  ngOnInit() {
    this.car = this.route.snapshot.data.car;
  }

  goBack() {
    this.router.navigate(['car', this.car.id]);
  }

  saveChanges() {
    this.conso.date = Math.floor((<Date>this.conso.date).getTime() / 1000);
    if (this.counterMileage) {
     this.conso.mileage = this.conso.mileage - this.car.mileage;
     this.counterMileage = false;
    }
    this.carsService.addConso(this.car, this.conso).subscribe(() => {
      this.goBack();
    });
  }

}
