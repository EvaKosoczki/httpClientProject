import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {
  transform(baseArray: User[], phrase: string = ''): any {
    return baseArray.filter(item => {
      let jsonBaseArray = JSON.stringify(item)
      return jsonBaseArray.toLowerCase().indexOf(phrase.toLowerCase()) > -1
    })
  }

}
