import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../share/models/cars.interface';

@Component({
  selector: 'app-car-conso',
  templateUrl: './car-conso.component.html',
  styleUrls: ['./car-conso.component.css']
})
export class CarConsoComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }

}
