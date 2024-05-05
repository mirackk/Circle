import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../Shared/services/news.service';
import { newsItem } from './profile-posts-story.model';
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: 'app-profile-posts-story',
  templateUrl: './profile-posts-story.component.html',
  styleUrls: ['./profile-posts-story.component.sass']
})
export class ProfilePostsStoryComponent implements OnInit{
  newsList: newsItem[] = []; // Assuming the service returns an array
  userNewsList: newsItem[] = []; // 存储当前用户的新闻

  constructor(
    private newsService: NewsService,
    private matIconRegistry: MatIconRegistry,
    ) { }

  ngOnInit() {
    // const currentUser = localStorage.getItem('userName'); // get current user
    // below is for testing
    const currentUser = "locluu1";
    
    // get all news list
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
      // console.log(this.newsList);
      // filter news list by current user
      if (currentUser) {
        this.userNewsList = this.newsList.filter(news => news.publisherName === currentUser);
        //console.log("User-specific News:", this.userNewsList);
      }
    });
  }

}
