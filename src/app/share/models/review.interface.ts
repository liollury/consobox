import {ICustomConverter, JsonProperty} from 'json-typescript-mapper';


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

export const REVIEW_TYPE_SYM = Symbol('REVIEW_TYPE_SYM');
export class Review {
  REVIEW_TYPE_SYM?: Symbol;

  @JsonProperty('id')
  id: number;

  @JsonProperty('mileage')
  mileage: number;

  @JsonProperty('interval')
  interval: number;

  @JsonProperty({clazz: ReviewHistory, name: 'history'})
  history: ReviewHistory[];

  constructor() {
    this.id = void 0;
    this.mileage = void 0;
    this.interval = void 0;
    this.history = [];
  }
}
