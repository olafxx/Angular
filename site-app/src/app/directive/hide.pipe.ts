import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide'
})
export class HidePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
