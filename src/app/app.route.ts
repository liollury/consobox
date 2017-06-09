import {CarSelectComponent} from './car-select/car-select.component';
import {CarTabsComponent} from './car-tabs/car-tabs.component';
import {AuthGuard} from './share/auth-service/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {FuelResolver} from './resolves/fuel.resolver';
import {CarResolver} from './resolves/car.resolver';

export const carSelect = {
  path : '',
  component: CarSelectComponent
}

export const carSummary = {
  path: ':carId',
  params: { carId: '1' },
  component: CarTabsComponent,
  resolve: {
    car: CarResolver
  }
};

export const carRoot = {
  path: 'car',
  children: [
    carSelect,
    carSummary
  ],
  canActivate: [
    AuthGuard
  ],
  resolve: {
    fuels: FuelResolver
  }
};

export const login = {
  path: 'login',
  component: LoginComponent,
};





export const AppRoutes = [carRoot, login];
