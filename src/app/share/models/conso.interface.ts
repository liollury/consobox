import {JsonProperty} from 'json-typescript-mapper';

export class Conso {
  @JsonProperty('date')
  date: number;

  @JsonProperty('volume')
  volume: number;

  @JsonProperty('mileage')
  mileage: number;

  @JsonProperty('full')
  full: boolean;

  @JsonProperty('price')
  price: number;

  constructor() {
    this.date = void 0;
    this.volume = void 0;
    this.mileage = void 0;
    this.full = void 0;
    this.price = void 0;
  }
}


export interface ConsoImport {
  voiture: number;
  date: string;
  volume: number;
  partiel: string;
  prix: number;
  km: number;
  idCloud: number;
}
