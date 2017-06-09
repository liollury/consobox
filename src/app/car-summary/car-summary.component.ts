import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../share/models/cars.interface';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../share/common-service/common.service';
import {Notification, NotificationType} from '../share/models/notification.class';
import {ImportService} from '../share/import-service/import.service';
import {Conso} from '../share/models/conso.interface';

@Component({
  selector: 'app-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['./car-summary.component.scss']
})
export class CarSummaryComponent implements OnInit {
  @Input() car: Car;
  options: Object;
  chart: any;

  constructor(private commonService: CommonService) {
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

    this.commonService.notifyObservable$.filter( (notification: Notification) => notification.type === NotificationType.CAR_TAB_CHANGE)
      .subscribe((notification: Notification) => {
        if (this.chart) {
          this.chart.reflow();
        }
      });
  }

  setChart(chartInstance) {
    this.chart = chartInstance;
  }

  getConsoAverage() {
    return this.car.consommations.reduce((acc: number, current: Conso) => acc + (current.volume * 100 / current.mileage), 0) / this.car.consommations.length;
  }

}
