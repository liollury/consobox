import {JsonProperty} from 'json-typescript-mapper';

/** http://www.moteurnature.com/actu/consommation-emission-CO2.php **/
export class Fuel {
  @JsonProperty('id')
  id: number;

  @JsonProperty('label')
  label: string;

  @JsonProperty('CO2PerLiter')
  CO2PerLiter: number;

  constructor() {
    this.id = void 0;
    this.label = void 0;
    this.CO2PerLiter = void 0;
  }
}
