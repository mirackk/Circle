import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from '../../../Shared/services/news.service';

// mat SVG icon
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent {

  postContent: String = '';
  panelOpenState: boolean = false;
  files: File[] = [];
  subscriptions?: Subscription[] = []; // Store the subscriptions in a list
  loginName: any = '';

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
  }

  post() {
    this.panelOpenState = false;
    const news: Object = {
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
    this.subscriptions?.push(this.postService.post(news).subscribe());
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
    this.subscriptions?.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
