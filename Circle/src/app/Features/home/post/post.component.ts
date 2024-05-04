import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from '../../../Shared/services/news.service';
import { Route } from '@angular/router';

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
  subscription?: Subscription[] = []; // Store the subscriptions in a list

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private postService: NewsService,
  ) {
    this.matIconRegistry.addSvgIcon('add-box-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/add_box.svg'));
    this.matIconRegistry.addSvgIcon('attach-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/attach.svg'));
  }

  post() {
    this.panelOpenState = false;
    const news: Object = {
      publisherName: 'test',
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
    // console.log(news);
    this.postService.post(news).subscribe(data => {
      // console.log(data)
    })
    window.location.reload();
  }

  onChange(event: any) {
    const files = event.target.files;
    if (files) {
      this.files = files
    }
  }

  ngOnDestory() {
    // Unsubscribing
    this.subscription?.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
