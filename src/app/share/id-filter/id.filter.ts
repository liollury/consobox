import {Pipe, PipeTransform} from '@angular/core';
import {Car, CAR_ID_SYM} from '../models/cars.interface';

@Pipe({name: 'id'})
export class IdPipe implements PipeTransform {
  transform(value: any, type: string) {
    switch(type) {
      case 'car':
        return (<Car>value)[CAR_ID_SYM];
      default:
        return 0;
    }
  }
}
