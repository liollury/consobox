import { Injectable } from '@angular/core';

@Injectable()
export class ConsoService {

  constructor() { }

  getConso(idCar: number): Observable<Car> {
    return Observable.of(this.carsMock[0]);
  }

}
