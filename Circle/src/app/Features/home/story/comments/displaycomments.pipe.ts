import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displaycomments'
})
export class DisplaycommentsPipe implements PipeTransform {

  transform(value: any): any {
    for (let info of value) {
      const date = new Date(info.publishedTime).toLocaleDateString('en-US');
      const time = new Date(info.publishedTime).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
      info.publishedTime = time + ' ' + date;
      info.publisherName = info.publisherName !== undefined ? info.publisherName : '?';
    }
    return value;
  }

}
