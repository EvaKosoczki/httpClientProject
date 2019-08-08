import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(baseArray: any, key: string): any {
    if (key === '') {
      return baseArray;
    }
    baseArray.sort((a, b) => {
      return a[key].toString().localeCompare(b[key].toString())
    })
    return baseArray;
  }

}
