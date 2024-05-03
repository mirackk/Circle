import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.sass']
})
export class LikeListComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public likelist: any[]) {}

  ngOnInit() {
    // console.log(this.likelist)
  }
}
