import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Conso} from '../models/conso.interface';

@Injectable()
export class ConsoService {
  carConsoMock: Array<Conso>;

  constructor() {
    this.carConsoMock = [];
    for (let i = 0; i < 100; i++) {
      this.carConsoMock.push({
        date   : Date.now() / 1000,
        volume : Math.random() * 45,
        mileage: Math.random() * 600,
        full   : true,
        price  : Math.random() * 2
      });
    }
  }

  getConso(idCar: number): Observable<Array<Conso>> {
    return Observable.of(this.carConsoMock);
  }

}
