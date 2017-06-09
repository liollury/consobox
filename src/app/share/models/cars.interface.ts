import {Fuel} from './fuel.interface';
export const CAR_ID_SYM = Symbol('CAR_ID_SYM');
export class Car {
  CAR_ID_SYM?: Symbol;
  name: string;
  mark: string;
  model: string;
  body: string;
  mileage: number;
  fuel: Fuel;
}
