import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from '../../../Shared/services/news.service';
import { LoginService } from 'src/app/Core/login/login.service';
import { UserService } from 'src/app/Shared/services/user.service';
import { User } from '../../admin/user-list/user.model';

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
  loginEmail: String = '';
  loginName: String = '';

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private postService: NewsService,
    private LoginService: LoginService,
    private userService: UserService,
  ) {
    this.matIconRegistry.addSvgIcon('add-box-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/add_box.svg'));
    this.matIconRegistry.addSvgIcon('attach-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/attach.svg'));
  }

  ngOnInit() {
    this.loginEmail = this.LoginService.getEmail();
    // Get username by checking the binding user email
    this.userService.getUserInfo().subscribe(data => {
      data.forEach((user: User) => {
        if (user.userEmail === this.loginEmail) {
          this.loginName = !this.loginName ? user.userName : this.loginName;
        }
      })
    });
    console.log(this.loginEmail)
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
