import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Conso, ConsoImport} from '../models/conso.interface';
import * as moment from 'moment';
import {AuthService} from '../auth-service/auth.service';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class ImportService {

  constructor(private db: AngularFireDatabase,
              private authService: AuthService) { }

  importConso(carId: string, carFilter: number, consosImport: Array<ConsoImport>) {
    const consos: Array<Conso> = [];
    for(const consoImport of consosImport) {
      if (consoImport.voiture === carFilter) {
        consos.push(this.consoImportToConso(consoImport));
      }
    }
    return this.authService.getUserDbObject().subscribe((userRef: firebase.database.Reference) => {
      userRef.child(`cars/${carId}/conso`).set(consos);
    });
  }

  consoImportToConso(consoImport: ConsoImport): Conso {
    return {
      price: consoImport.prix,
      full: consoImport.partiel === 'false',
      mileage: consoImport.km,
      volume: consoImport.volume,
      date: moment(consoImport.date).unix()
    }
  }
}
