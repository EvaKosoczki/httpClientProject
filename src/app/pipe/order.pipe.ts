import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(baseArray: any, key: string, direction: number = 1): any {
    if (key === '') {
      return baseArray;
    }
    baseArray.sort((a, b) => {
      if (key === 'name') {
        return (a.name.first.toString().localeCompare(b.name.first.toString())) * direction
      } else if (key === 'id') {
        return (a.id - b.id) * direction
      }
      else {
        return (a[key].toString().localeCompare(b[key].toString())) * direction
      }
    })
    return baseArray;
  }
}




