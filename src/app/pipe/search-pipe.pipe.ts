import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {
  transform(baseArray: any, phrase: string = ''): any {
    return baseArray.filter(item => {
      let jsonBaseArray = JSON.stringify(item)
      return jsonBaseArray.toLowerCase().indexOf(phrase.toLowerCase()) > -1
    })
  }

}
