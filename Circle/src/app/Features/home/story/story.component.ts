import { Component, OnInit, Output } from '@angular/core';
import { NewsService } from '../../../Shared/services/news.service';
import { newsItem } from './story.model';
import { MatDialog } from '@angular/material/dialog';
// Child
import { CommentsComponent } from './comments/comments.component';
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
  comments: any[] = [];

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
      console.log(data)
      this.newsList = data;
      // console.log(this.newsList);
    });
  }

  openCommentList(comments: any[]) {
    console.log(comments);
    this.comments = comments;
    const commentsRef = this.dialog.open(CommentsComponent);
    commentsRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
