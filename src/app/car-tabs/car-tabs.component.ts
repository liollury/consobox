import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../share/models/cars.interface';

@Component({
  selector: 'app-car-tabs',
  templateUrl: './car-tabs.component.html',
  styleUrls: ['./car-tabs.component.css']
})
export class CarTabsComponent implements OnInit {
  car: Car;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.car = this.route.snapshot.data.car;
  }

}
