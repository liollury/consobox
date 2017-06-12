import { Injectable } from '@angular/core';
import {Car, CAR_ID_SYM} from '../models/cars.interface';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../auth-service/auth.service';
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/fromPromise';
import {FuelService} from '../fuel-service/fuel.service';
import {deserialize} from 'json-typescript-mapper';

@Injectable()
export class CarsService {
  constructor(private db: AngularFireDatabase,
              private authService: AuthService,
              private fuelService: FuelService) { }


  getCars(): Observable<Array<Car>> {
    return this.authService.getUserDbObject().mergeMap((userRef: firebase.database.Reference) => {
      return Observable.fromPromise(userRef.child(`cars`).once('value'));
    }).map((carSnapshot: firebase.database.DataSnapshot) => {
      const cars: Array<Car> = [];
      for (const key in carSnapshot.val()) {
        if (carSnapshot.val().hasOwnProperty(key)) {
          const car = deserialize(Car, carSnapshot.val()[key]);
          car[CAR_ID_SYM] = key;
          cars.push(car);
        }
      }
      return cars;
    });
  }

  getCar(id: string): Observable<Car> {
    return this.authService.getUserDbObject().mergeMap((userRef: firebase.database.Reference) => {
      return Observable.fromPromise(userRef.child(`cars/${id}`).once('value'));
    }).map((carSnapshot: firebase.database.DataSnapshot) => {
      const car: Car = deserialize(Car, carSnapshot.val());
      car[CAR_ID_SYM] = carSnapshot.key;
      return car;
    });
  }

  createCar(car: Car): Observable<Car> {
    return this.authService.getUserDbObject().mergeMap((userRef: firebase.database.Reference) => {
      return Observable.fromPromise(userRef.child('cars').push(car));
    }).mergeMap((value: firebase.database.ThenableReference) => {
      return this.getCar(value.key);
    });
  }
}
