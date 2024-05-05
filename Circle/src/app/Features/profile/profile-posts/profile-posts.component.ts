import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.sass']
})
export class ProfilePostsComponent {
  userName: string;
  userEmail: string;

  constructor() {
    this.userName = localStorage.getItem('userName') || 'N/A'; // if not found, set to 'N/A'
    this.userEmail = localStorage.getItem('userEmail') || 'N/A';
  }
}
