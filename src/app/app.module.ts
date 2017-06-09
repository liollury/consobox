import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSidenavModule,
  MdListModule, MdTabsModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { CarSelectComponent } from './car-select/car-select.component';
import {AppRoutes, CarResolver} from './app.route';
import {ConsoboxShareModule} from './share/consobox-share.module';
import { CarSummaryComponent } from './car-summary/car-summary.component';
import {CarsService} from './share/cars-service/cars.service';
import {RouterModule} from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { CarFabComponent } from './car-fab/car-fab.component';
import { CarTabsComponent } from './car-tabs/car-tabs.component';
import { CarConsoComponent } from './car-conso/car-conso.component';
import {RoundPipe} from './share/round-filter/round.filter';
import {MomentModule} from 'angular2-moment';
import { CarReviewComponent } from './car-review/car-review.component';
import { CarSpendComponent } from './car-spend/car-spend.component';
import {CommonService} from './share/common-service/common.service';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    CarSelectComponent,
    CarSummaryComponent,
    CarFabComponent,
    CarTabsComponent,
    CarConsoComponent,
    RoundPipe,
    CarReviewComponent,
    CarSpendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdTabsModule,
    MomentModule,
    ConsoboxShareModule,
    ChartModule.forRoot(highcharts),
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [CarsService, CarResolver, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
