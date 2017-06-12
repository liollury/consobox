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


  static getEnergyGrade(CO2: number): EnergyGrade {
    if (CO2 <= 100) {
      return EnergyGrade.CLASS_A;
    }else if (CO2 > 100 && CO2 <= 120) {
      return EnergyGrade.CLASS_B;
    }else if (CO2 > 120 && CO2 <= 140) {
      return EnergyGrade.CLASS_C;
    }else if (CO2 > 140 && CO2 <= 160) {
      return EnergyGrade.CLASS_D;
    }else if (CO2 > 160 && CO2 <= 200) {
      return EnergyGrade.CLASS_E;
    }else if (CO2 > 200 && CO2 <= 250) {
      return EnergyGrade.CLASS_F;
    }else {
      return EnergyGrade.CLASS_G;
    }
  }
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

  sortConsoDesc() {
    this.consommations = this.consommations.sort((a: Conso, b: Conso) => b.date - a.date);
  }

}

export enum EnergyGrade {
  CLASS_A = <any>'A',
  CLASS_B = <any>'B',
  CLASS_C = <any>'C',
  CLASS_D = <any>'D',
  CLASS_E = <any>'E',
  CLASS_F = <any>'F',
  CLASS_G = <any>'G'
}
