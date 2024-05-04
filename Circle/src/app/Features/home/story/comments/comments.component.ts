import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent {

  commentPost: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public commInfo: any[]) {}

  ngOnInit() {

  }

  onSubmit() {

  }
}
