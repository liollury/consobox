import { Component, OnInit } from '@angular/core';
import {Car} from '../share/models/cars.interface';
import {CarsService} from '../share/cars-service/cars.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-car-select',
  templateUrl: './car-select.component.html',
  styleUrls: ['./car-select.component.css'],
  providers: [
    CarsService
  ]
})
export class CarSelectComponent implements OnInit {
  carsObservable: Observable<Car[]>;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsObservable = this.carsService.getCars();
  }

}
