import { Injectable } from '@angular/core';
import {Car} from '../models/cars.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarsService {
  carsMock: Array<Car> = [
    {
      id: 1,
      name: 'Opel Corsa',
      mark: 'Opel',
      model: 'Corsa',
      body: 'gsi 1.8',
      mileage: 169852.32,
      fuel: 0
    }
  ];

  constructor() { }


  getCars(): Observable<Array<Car>> {
    return Observable.of(this.carsMock);
  }

  getCar(id: number): Observable<Car> {
    return Observable.of(this.carsMock[0]);
  }
}
