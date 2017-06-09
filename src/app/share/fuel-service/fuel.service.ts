import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Fuel} from '../models/fuel.interface';

@Injectable()
export class FuelService {

  constructor(private db: AngularFireDatabase) { }

  getFuels(): Observable<Array<Fuel>> {
    return this.db.list('/fuels');
  }

}
