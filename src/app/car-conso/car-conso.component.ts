import {Component, Input, OnInit} from '@angular/core';
import {Car, CAR_ID_SYM} from '../share/models/cars.interface';
import {ConsoService} from '../share/conso-service/conso.service';
import {Conso} from '../share/models/conso.interface';

@Component({
  selector: 'app-car-conso',
  templateUrl: './car-conso.component.html',
  styleUrls: ['./car-conso.component.scss'],
  providers: [
    ConsoService
  ]
})
export class CarConsoComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
    this.car.consommations.sort((consoA: Conso, consoB: Conso) => consoB.date - consoA.date);
  }

}
