import { Injectable } from '@angular/core';
import {Car} from '../models/cars.interface';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../auth-service/auth.service';
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/fromPromise';
import {FuelService} from '../fuel-service/fuel.service';
import {deserialize, serialize} from 'json-typescript-mapper';
import {removeUndefined} from '../utils';

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
          car.id = key;
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
      car.sortConsoDesc();
      car.id = carSnapshot.key;
      return car;
    });
  }

  createCar(car: Car): Observable<Car> {
    return this.authService.getUserDbObject().mergeMap((userRef: firebase.database.Reference) => {
      return Observable.fromPromise(userRef.child('cars').push(serialize(car)));
    }).mergeMap((value: firebase.database.ThenableReference) => {
      return this.getCar(value.key);
    });
  }

  saveReviews(car: Car): Observable<firebase.database.ThenableReference> {
    return this.authService.getUserDbObject().mergeMap((userRef: firebase.database.Reference) => {
      return Observable.fromPromise(userRef.child(`cars/${car.id}/reviews`).set(removeUndefined(serialize(car.reviews))));
    })
  }
}
