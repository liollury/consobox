import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CarsService} from '../share/cars-service/cars.service';
import {Car} from '../share/models/cars.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarResolver implements Resolve<Car> {
  constructor(private carsService: CarsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Car> {
    return this.carsService.getCar(route.params.carId).first();
  }
}
