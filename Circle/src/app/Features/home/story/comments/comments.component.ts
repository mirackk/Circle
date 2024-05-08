import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from './comment.service';
import { FormGroup, FormControl } from '@angular/forms';
import { commentData } from '../story.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent {

  contentText: string = '';
  commInfo: any[] = [];
  id: string = '';
  loginName: string = '';
  commentForm = new FormGroup({ content: new FormControl('') });
  subscriptions?: Subscription[] = []; // Store the subscriptions in a list

  constructor(
    private commentService: CommentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.id = this.data.storyId;
    this.commInfo = this.data.info;
    this.loginName = localStorage.userName;
  }

  onSubmit() {
    let contentText = this.commentForm.get('content')?.value;
    // console.log(content)
    if (contentText) {
      const content: commentData = {
        publisherName: this.loginName,
        content: {
            image: '',
            video: '',
            text: contentText,
        }
      };
      this.subscriptions?.push(this.commentService.patch(this.id, content).subscribe((data: any) => {
      const date = new Date(data.publishedTime).toLocaleDateString('en-US');
      const time = new Date(data.publishedTime).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
      data.publishedTime = time + ' ' + date;
        this.commInfo.push(data);
        // console.log(data);
      }));
    }
    this.commentForm.reset();
  }

  ngOnDestory() {
    // Unsubscribing
    this.subscriptions?.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
