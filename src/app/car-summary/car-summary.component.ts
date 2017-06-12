import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../share/models/cars.interface';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../share/common-service/common.service';
import {Notification, NotificationType} from '../share/models/notification.class';
import {ImportService} from '../share/import-service/import.service';
import {Conso} from '../share/models/conso.interface';
import * as moment from 'moment';

@Component({
  selector   : 'app-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls  : ['./car-summary.component.scss']
})
export class CarSummaryComponent implements OnInit {
  @Input() car: Car;
  options: Object;
  consoAverage: number;
  chart: any;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    const consoSerie = this.car.consommations
      .filter((_, index) => index < 20)
      .map((conso: Conso) => [conso.date, (conso.volume * 100 / conso.mileage)]);

    this.options = {
      title  : {
        text: null
      },
      chart  : {
        type           : 'line',
        backgroundColor: 'transparent'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function () {
          return `<strong>${moment.unix(this.x).format('DD/MM/YYYY')}</strong><br/>${this.series.name} - ${this.y.toFixed(2)}l/100km`;
        }
      },
      yAxis  : {
        title: {
          enabled: false
        }
      },
      xAxis  : {
        title : {
          enabled: false
        },
        labels: {
          formatter: function () {
            return moment.unix(this.value).format('DD/MM');
          }
        }
      },
      legend : {
        enabled: false
      },
      series : [{
        name : 'Conso',
        yAxis: 0,
        data : consoSerie,
      }
      ]
    };

    this.commonService.notifyObservable$.filter((notification: Notification) => notification.type === NotificationType.CAR_TAB_CHANGE)
      .subscribe((notification: Notification) => {
        if (this.chart) {
          this.chart.reflow();
        }
      });
  }

  setChart(chartInstance) {
    this.chart = chartInstance;
  }

  getConsoAverage(): number {
    if (!this.consoAverage) {
      this.consoAverage = this.car.consommations.reduce((acc: number, current: Conso) => acc + (current.volume * 100 / current.mileage), 0) / this.car.consommations.length;
    }
    return this.consoAverage;
  }

  getDiffConsoPercent(): number {
    return (this.getConsoAverage() - this.car.consoTheorical) / this.car.consoTheorical * 100;
  }

  getEnergyGrade(CO2: number): string {
    return Car.getEnergyGrade(CO2).toString();
  }

}
