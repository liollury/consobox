import {ICustomConverter, JsonProperty} from 'json-typescript-mapper';
import * as moment from 'moment';


export class ReviewTypeFuel {
  @JsonProperty('type')
  type: number;

  @JsonProperty('mileage')
  mileage: number;

  @JsonProperty('interval')
  interval: number;

  constructor() {
    this.type = void 0;
    this.mileage = void 0;
    this.interval = void 0;
  }
}

export class ReviewType {
  @JsonProperty('id')
  id: number;

  @JsonProperty('name')
  name: string;

  @JsonProperty({clazz: ReviewTypeFuel, name: 'fuel'})
  fuel: ReviewTypeFuel[];

  constructor() {
    this.id = void 0;
    this.name = void 0;
    this.fuel = void 0;
  }
}

export class ReviewCategory {
  @JsonProperty('id')
  id: number;

  @JsonProperty('name')
  name: string;

  @JsonProperty('icon')
  icon: string;

  @JsonProperty({clazz: ReviewType, name: 'reviews'})
  reviews: Array<ReviewType>;

  constructor() {
    this.id = void 0;
    this.name = void 0;
    this.icon = void 0;
    this.reviews = void 0;
  }
}

export class JsonDateConverter implements ICustomConverter {
  fromJson(data: any): any {
    return parseInt(data, 10);
  }

  toJson(data: any): any {
    return data.toString();
  }
}

export class ReviewHistory {
  @JsonProperty({name: 'date', customConverter: new JsonDateConverter()})
  date: number | Date;

  @JsonProperty('mileage')
  mileage: number;

  @JsonProperty('price')
  price: number;

  constructor() {
    this.date = void 0;
    this.mileage = void 0;
    this.price = void 0;
  }
}

export class Review {
  @JsonProperty({excludeToJson: true})
  reviewType: ReviewType;

  @JsonProperty('id')
  id: number;

  @JsonProperty('mileage')
  mileage: number;

  @JsonProperty('interval')
  interval: number;

  @JsonProperty({clazz: ReviewHistory, name: 'history'})
  history: ReviewHistory[];

  @JsonProperty({excludeToJson: true})
  percentCompleteDelay: number;

  @JsonProperty({excludeToJson: true})
  percentCompleteKm: number;

  @JsonProperty({excludeToJson: true})
  lastReviewKm: number;

  @JsonProperty({excludeToJson: true})
  lastReviewDelay: number;

  constructor() {
    this.id = void 0;
    this.mileage = void 0;
    this.interval = void 0;
    this.history = [];
  }

  computeLastestHistory?(carMileage: number): void {
    const lastestReview: ReviewHistory = this.getLastest();
    if (lastestReview.date === void 0) {
      return;
    }
    if (this.interval !== 0) {
      this.lastReviewDelay = this.interval - moment().diff(moment.unix(<number>lastestReview.date), 'months');
      this.lastReviewDelay = this.lastReviewDelay < 0 ? 0 : this.lastReviewDelay;
      this.percentCompleteDelay = 1 - (this.lastReviewDelay / this.interval);
    }
    if (this.mileage !== 0) {
      this.lastReviewKm = this.mileage - (carMileage - lastestReview.mileage);
      this.percentCompleteKm = 1 - (this.lastReviewKm / this.mileage);
    }
  }

  getLastest?(): ReviewHistory {
    this.history = this.history ? this.history : [];
    return this.history.reduce((acc: ReviewHistory, current: ReviewHistory) => acc.date > current.date ? acc : current, new ReviewHistory());
  }
}
