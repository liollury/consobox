import {CarSelectComponent} from './car-select/car-select.component';
import {CarTabsComponent} from './car-tabs/car-tabs.component';
import {AuthGuard} from './share/auth-service/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {FuelResolver} from './resolves/fuel.resolver';
import {CarResolver} from './resolves/car.resolver';
import {CarAddReviewComponent} from './car-add-review/car-add-review.component';
import {ReviewCategoriesResolver} from './resolves/review-categories.resolver';
import {ReviewDetailsComponent} from './review-details/review-details.component';
import {ReviewTypeResolver} from './resolves/review-type.resolver';
import {CarAddConsoComponent} from './car-add-conso/car-add-conso.component';

export const carSelect = {
  path : '',
  component: CarSelectComponent
}

export const carAddReview = {
  path: 'addReview',
  component: CarAddReviewComponent,
  resolve: {
    reviewCategories: ReviewCategoriesResolver
  }
};

export const carAddConso = {
  path: 'addConso',
  component: CarAddConsoComponent,
  resolve: {

  }
};

export const reviewDetails = {
  path: 'reviewDetails/:revId',
  component: ReviewDetailsComponent,
  resolve: {
    reviewType: ReviewTypeResolver
  }
};

export const carTabs = {
  path : '',
  component: CarTabsComponent,
  resolve: {

  }
}

export const carDetails = {
  path: ':carId',
  children: [
    carTabs,
    carAddReview,
    reviewDetails,
    carAddConso
  ],
  resolve: {
    car: CarResolver
  }
};



export const carRoot = {
  path: 'car',
  children: [
    carSelect,
    carDetails,
    carAddReview
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
