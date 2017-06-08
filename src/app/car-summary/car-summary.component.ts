import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../share/models/cars.interface';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['./car-summary.component.scss']
})
export class CarSummaryComponent implements OnInit {
  @Input() car: Car;
  options: Object;

  constructor() {
  }

  ngOnInit() {

    this.options = {
      title : {
        text : null
      },
      chart: {
        type: 'line',
        backgroundColor: 'transparent'
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: {
          enabled: false
        }
      },
      xAxis: {
        title: {
          enabled: false
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }

}
