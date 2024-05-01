import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../Shared/services/news.service';
import { newsItem } from './story.model';
// mat SVG icon
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {
  newsList: newsItem[] = []; // Assuming the service returns an array
  // contentTmp: HTMLElement = <HTMLElement> document.getElementsByClassName('');

  constructor(
    private newsService: NewsService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('fav-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/favorite.svg'));
    this.matIconRegistry.addSvgIcon('chat-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/comment.svg'));
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      // console.log(data)
      this.newsList = data;
      // console.log(this.newsList);
    });
  }
}
