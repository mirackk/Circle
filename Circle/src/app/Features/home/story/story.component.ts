import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../Shared/services/news.service';
import { newsItem } from './story.model';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
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
  likeList: any = [];
  colorList: any[] = [];
  subscriptions?: Subscription[] = [];

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
    this.likeList = localStorage.getItem('likeList') ? JSON.parse(localStorage.likeList) : [];
    console.log(this.likeList)
    this.newsService.getNews().subscribe(data => {
      this.loaded = true;
      // console.log(data)
      this.newsList = data;
      // console.log(this.newsList);
      // setting the like status color of each like button
      for (let i = 0; i < this.newsList.length; i++) {
        let isInList = false;
        this.likeList.forEach((news: any) => {
          if (news._id === this.newsList[i]._id) {
            isInList = true;
          }
        })
        if (isInList) {
          this.colorList.push('warn');
          this.newsList[i].likedIdList.length++;
        }
        else {
          this.colorList.push('');
        }
      }
    });
  }

  addToLikeList(newsInfo: newsItem, index: number) {
    if (this.colorList[index] === '') {
      this.colorList[index] = 'warn';
      newsInfo.likedIdList.length++;
      this.likeList.push(newsInfo);
      localStorage.setItem('likeList', JSON.stringify(this.likeList));
    }
    else {
      this.colorList[index] = '';
      newsInfo.likedIdList.length--;
      this.likeList.pop();
      localStorage.setItem('likeList', JSON.stringify(this.likeList));
    }
  }

  openCommentList(id: any, comments: any[]) {
    const commentsRef = this.dialog.open(CommentsComponent, { data: { storyId: id, info: comments } });
    this.subscriptions?.push(commentsRef.afterClosed().subscribe());
  }

  openLikeList() {
    const likesRef = this.dialog.open(LikeListComponent, { data: this.likeList });
    this.subscriptions?.push(likesRef.afterClosed().subscribe());
  }

  ngOnDestory() {
    this.subscriptions?.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
