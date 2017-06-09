import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../share/models/cars.interface';
import {CommonService} from '../share/common-service/common.service';
import {CarTabChangeNotification} from '../share/models/notification.class';
import {MdTabsModule} from '@angular/material';

@Component({
  selector: 'app-car-tabs',
  templateUrl: './car-tabs.component.html',
  styleUrls: ['./car-tabs.component.css']
})
export class CarTabsComponent implements OnInit {
  car: Car;

  constructor(private route: ActivatedRoute,
              private commonService: CommonService) { }

  ngOnInit() {
    console.log(this.route.snapshot.data);
    this.car = this.route.snapshot.data.car;
  }

  tabChange($event) {
    this.commonService.publish(new CarTabChangeNotification($event));
  }
}
