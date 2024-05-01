import { Component, OnInit } from '@angular/core';
import {Story } from './profile-posts-story.model';

@Component({
  selector: 'app-profile-posts-story',
  templateUrl: './profile-posts-story.component.html',
  styleUrls: ['./profile-posts-story.component.sass']
})
export class ProfilePostsStoryComponent implements OnInit{
  stories: Story[] = [
    {
      id: 1,
      media: [
        'url-to-image-or-video-1.jpg',
        'url-to-image-or-video-2.jpg'
      ],
      likes: 10,
      comments: 5
    },
    {
      id: 2,
      media: [
        'url-to-image-or-video-1.jpg',
        'url-to-image-or-video-2.jpg'
      ],
      likes: 20,
      comments: 8
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
