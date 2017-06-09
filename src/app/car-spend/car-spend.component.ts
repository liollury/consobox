import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../share/models/cars.interface';
import {CommonService} from '../share/common-service/common.service';
import {Notification, NotificationType} from '../share/models/notification.class';

@Component({
  selector: 'app-car-spend',
  templateUrl: './car-spend.component.html',
  styleUrls: ['./car-spend.component.scss']
})
export class CarSpendComponent implements OnInit {
  @Input() car: Car;
  options: Object;
  chart: any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.options = {
      title : {
        text : null
      },
      chart: {
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
        type: 'line',
        data: [29.9, 71.5, 106.4, 129.2],
      },
        {
          type: 'column',
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

}
