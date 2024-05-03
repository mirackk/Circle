import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../Shared/services/news.service';
import { newsItem } from './story.model';
import { MatDialog } from '@angular/material/dialog';
// child
import { CommentsComponent } from './comments/comments.component';
import { LikeListComponent } from './like-list/like-list.component';
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
  loaded: boolean = false;
  likeList: newsItem[] = [];
  colorList: any[] = [];

  constructor(
    private newsService: NewsService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog,
  ) {
    this.matIconRegistry.addSvgIcon('fav-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/favorite.svg'));
    this.matIconRegistry.addSvgIcon('chat-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/comment.svg'));
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.loaded = true;
      // console.log(data)
      this.newsList = data;
      // console.log(this.newsList);
      for (let i = 0; i < this.newsList.length; i++) {
        this.colorList.push('');
      }
    });
  }

  addToLikeList(event: Event, newsInfo: newsItem, index: number) {
    if (this.colorList[index] === '') {
      this.colorList[index] = 'warn';
      newsInfo.likedIdList.length++;
      this.likeList.push(newsInfo);
    }
    else {
      this.colorList[index] = '';
      newsInfo.likedIdList.length--;
      this.likeList.pop();
    }
  }

  openCommentList(comments: any[]) {
    const commentsRef = this.dialog.open(CommentsComponent, { data: comments });
    commentsRef.afterClosed().subscribe(result => {
    });
  }

  openLikeList(likes: any[]) {
    const likesRef = this.dialog.open(LikeListComponent, { data: likes });
    likesRef.afterClosed().subscribe(result => {
    });
  }
}
