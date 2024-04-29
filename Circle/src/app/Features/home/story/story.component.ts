import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../Shared/services/news.service';
import { newsItem } from './story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {
  newsList: newsItem[] = []; // Assuming the service returns an array

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
      //console.log(this.newsList[0]["content"]);
    });
  }
}
