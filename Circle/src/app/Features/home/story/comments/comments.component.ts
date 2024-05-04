import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from './comment.service';
import { LoginService } from 'src/app/Core/login/login.service';
import { UserService } from 'src/app/Shared/services/user.service';
import { User } from 'src/app/Features/admin/user-list/user.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent {

  contentText: string = '';
  commInfo: any[] = [];
  id: any = '';
  loginEmail: String = '';
  loginName: String = '';

  constructor(
    private commentService: CommentService,
    private LoginService: LoginService,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.id = this.data.storyId;
    this.commInfo = this.data.info;
    this.loginEmail = this.LoginService.getEmail();
    // Get username by checking the binding user email
    this.userService.getUserInfo().subscribe(data => {
      data.forEach((user: User) => {
        if (user.userEmail === this.loginEmail) {
          this.loginName = user.userName;
        }
      })
    });
  }

  onSubmit() {
    const content = {
      publisherName: this.loginName,
      content: {
          image: '',
          video: '',
          text: this.contentText,
      }
    };
    if (this.contentText) {
      this.commentService.patch(this.id, content);
    }
    this.contentText = '';
    window.location.reload();
  }
}
