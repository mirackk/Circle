import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'display'
})
export class DisplayPipe implements PipeTransform {

  transform(value: string[]): string[] {
    const newList: string[] = [];
    for (let val of value) {
      if (val.length <= 20) {
        newList.push(val);
      }
      else {
        let str = val.substring(0, 21) + '...';
        newList.push(str);
      }
    }
    return newList;
  }

}
