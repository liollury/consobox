import {Fuel} from './fuel.interface';
import {Conso} from './conso.interface';
export const CAR_ID_SYM = Symbol('CAR_ID_SYM');
export class Car {
  CAR_ID_SYM?: Symbol;
  name: string;
  mark: string;
  model: string;
  body: string;
  mileage: number;
  fuel: Fuel;
  consommations: Array<Conso>
}
