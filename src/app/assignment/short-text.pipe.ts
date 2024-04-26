import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: String, len: number = 20): String {
    if(!value) return value;
    return value.length > len ? value.substring(0,len) + '...' : value;
  }

}
