import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from './comment.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent {

  contentText: string = '';
  commInfo: any[] = [];
  id: any = '';
  loginName: any = '';
  commentForm = new FormGroup({ content: new FormControl('') });

  constructor(
    private commentService: CommentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.id = this.data.storyId;
    this.commInfo = this.data.info;
    this.loginName = localStorage.getItem('userName');
  }

  onSubmit() {
    let contentText = this.commentForm.get('content')?.value;
    const content = {
      publisherName: this.loginName,
      content: {
          image: '',
          video: '',
          text: contentText,
      }
    };
    console.log(content)
    if (contentText) {
      this.commentService.patch(this.id, content);
    }
    this.commentForm.reset();
    window.location.reload();
  }
}
