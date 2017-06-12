import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSidenavModule,
  MdListModule, MdTabsModule, MdSlideToggleModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { CarSelectComponent } from './car-select/car-select.component';
import {AppRoutes} from './app.route';
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
import {AuthGuard} from './share/auth-service/auth-guard.service';
import {AuthService} from './share/auth-service/auth.service';
import { LoginComponent } from './login/login.component';
import {CarResolver} from './resolves/car.resolver';
import {FuelResolver} from './resolves/fuel.resolver';
import {FuelService} from './share/fuel-service/fuel.service';
import {IdPipe} from './share/id-filter/id.filter';
import {TranslateModule} from '@ngx-translate/core';
import {ImportService} from './share/import-service/import.service';
import {ConsoService} from './share/conso-service/conso.service';
import { CarAddReviewComponent } from './car-add-review/car-add-review.component';
import {ReviewCategoriesResolver} from './resolves/review-categories.resolver';
import {ReviewService} from './share/review-service/review.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    /** Components **/
    AppComponent,
    CarSelectComponent,
    CarSummaryComponent,
    CarFabComponent,
    CarTabsComponent,
    CarConsoComponent,
    CarReviewComponent,
    CarAddReviewComponent,
    CarSpendComponent,
    LoginComponent,
    /** Pipes **/
    RoundPipe,
    IdPipe
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
    MdSlideToggleModule,
    FormsModule,
    MomentModule,
    ConsoboxShareModule,
    ChartModule.forRoot(highcharts),
    RouterModule.forRoot(AppRoutes),
    TranslateModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    /** Resolvers **/
    CarResolver,
    FuelResolver,
    ReviewCategoriesResolver,
    /** Services **/
    ReviewService,
    CarsService,
    CommonService,
    AuthService,
    FuelService,
    ImportService,
    ConsoService,
    /** Others **/
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
