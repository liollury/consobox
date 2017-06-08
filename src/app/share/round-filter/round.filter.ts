import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
  transform(value: number, prec: string) {
    const precision: number = parseInt(prec, 10);
    return value.toFixed(precision);
  }
}
