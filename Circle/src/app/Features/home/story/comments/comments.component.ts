import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent {
  @Input() comments: any[] = [];

  ngOnInit() {
    console.log(this.comments)
  }
}
