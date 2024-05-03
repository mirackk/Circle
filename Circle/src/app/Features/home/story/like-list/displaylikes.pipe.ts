import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displaylikes'
})
export class DisplaylikesPipe implements PipeTransform {

  transform(value: any[]): any[] {
    const likeList: any[] = [];
    for (let val of value) {
      const like = { ...val };
      if (like.content) {
        like.content = { ...val.content }; // shallow copy the content obj
        if (like.content.text && like.content.text.length > 70) {
          like.content.text = like.content.text.substring(0, 70) + '...';
        }
      }
      likeList.push(like);
    }
    return likeList;
  }

}
