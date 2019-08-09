import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(baseArray: any, key: string): any {
    if (key === '') {
      return baseArray;
    }
    if (key === 'name') {
      baseArray.sort((a, b) => {
        return a.name.first.toString().localeCompare(b.name.first.toString())
      })
    }
    baseArray.sort((a, b) => {
      return a[key].toString().localeCompare(b[key].toString())
    })
    return baseArray;
  }

}
