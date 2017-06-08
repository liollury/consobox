import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../share/models/cars.interface';
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
  consos: Array<Conso>;

  constructor(private consoService: ConsoService) { }

  ngOnInit() {
    this.consoService.getConso(this.car.id).subscribe(value => this.consos = value);
  }

}
