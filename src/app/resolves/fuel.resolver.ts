import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {FuelService} from '../share/fuel-service/fuel.service';
import {Observable} from 'rxjs/Observable';
import {Fuel} from '../share/models/fuel.interface';

@Injectable()
export class FuelResolver implements Resolve<Array<Fuel>> {
  constructor(private fuelService: FuelService) { }

  resolve(): Observable<Array<Fuel>> {
    return this.fuelService.getFuels().first();
  }
}
