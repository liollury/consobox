import {CarSelectComponent} from './car-select/car-select.component';
import {CarsService} from './share/cars-service/cars.service';
import {CarSummaryComponent} from './car-summary/car-summary.component';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Car} from './share/models/cars.interface';
import {Injectable} from '@angular/core';
import {CarTabsComponent} from './car-tabs/car-tabs.component';

@Injectable()
export class CarResolver implements Resolve<Car> {
  constructor(private carsService: CarsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Car> {
    return this.carsService.getCar(route.params.carId);
  }
}


export const carSelect = {
  path : '',
  component: CarSelectComponent
}

export const carSummary = {
  path: ':carId',
  params: { carId: '1' },
  component: CarTabsComponent,
  resolve: {
    car: CarResolver
  }
};

export const carRoot = {
  path: 'car',
  children: [
    carSelect,
    carSummary
  ]
};




export const AppRoutes = [carRoot];
