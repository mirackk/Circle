import { NewsService } from './../../../Shared/services/news.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { newsItem, postData } from '../story/story.model';

// mat SVG icon
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent {

  postContent: string = '';
  panelOpenState: boolean = false;
  files: File[] = [];
  subscriptions?: Subscription[] = []; // Store the subscriptions in a list
  loginName: any = '';
  postList: any = [];

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private postService: NewsService,
  ) {
    this.matIconRegistry.addSvgIcon('add-box-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/add_box.svg'));
    this.matIconRegistry.addSvgIcon('attach-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/attach.svg'));
  }

  ngOnInit() {
    this.loginName = localStorage.getItem('userName');
    this.postList = localStorage.getItem('postList') ? JSON.parse(localStorage.postList) : [];
  }

  post() {
    this.panelOpenState = false;
    const news: postData = {
      publisherName: this.loginName,
      publishedTime: new Date().toISOString(),
      content: {
          image: 'dummy.png',
          video: 'dummy.mp4',
          text: this.postContent,
      },
      comment: [],
      likedIdList: [],
    }
    this.postContent = '';
    this.subscriptions?.push(this.postService.post(news).subscribe(data => {
      // add new post to local storage for profile page
      // console.log(data)
      const postNews = Object(data);
      // console.log(postNews)
      this.postService.updateNews(postNews);
      this.postList.push(data);
      localStorage.setItem('postList', JSON.stringify(this.postList));
    }));
    // window.location.reload();
  }

  onChange(event: any) {
    const files = event.target.files;
    if (files) {
      this.files = files
    }
  }

  ngOnDestory() {
    // Unsubscribing
    this.subscriptions?.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
