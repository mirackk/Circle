import { Pipe, PipeTransform } from '@angular/core';
import { newsItem } from './story.model';

@Pipe({
  name: 'displaynews'
})
export class DisplaynewsPipe implements PipeTransform {

  transform(value: newsItem[]): newsItem[] {
    for (let news of value) {
      const date = new Date(news.publishedTime).toLocaleDateString('en-US');
      const time = new Date(news.publishedTime).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
      news.publishedTime = time + ' ' + date;
      news.publisherName = news.publisherName !== undefined ? news.publisherName : '?';
      // console.log(news.content)
      // news.content.text = news.content.text !== undefined ? news.content.text : '';
    }
    return value;
  }

}
