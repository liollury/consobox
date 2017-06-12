import {Fuel} from './fuel.interface';
import {Conso} from './conso.interface';
import {JsonProperty} from 'json-typescript-mapper';

export const CAR_ID_SYM = Symbol('CAR_ID_SYM');
export class Car {
  CAR_ID_SYM?: Symbol;

  @JsonProperty('name')
  name: string;

  @JsonProperty('cv')
  cv: number;

  @JsonProperty('cvf')
  cvf: number;

  @JsonProperty('mileage')
  mileage: number;

  @JsonProperty({clazz: Fuel, name: 'fuel'})
  fuel: Fuel;

  @JsonProperty({clazz: Conso, name: 'consommations'})
  consommations: Conso[];

  constructor() {
    this.name = void 0;
    this.cv = void 0;
    this.cvf = void 0;
    this.mileage = void 0;
    this.fuel = void 0;
    this.consommations = void 0;
  }

  get CO2Theorical() {
    return (this.cvf - Math.pow(this.cv * 0.73539875 / 40, 1.6)) * 45;
  }

  get consoTheorical() {
    return 100 / (this.fuel.CO2PerLiter / this.CO2Theorical);
  }
}
