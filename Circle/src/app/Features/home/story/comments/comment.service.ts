import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { commentData } from '../story.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  patch(id: string, data: commentData): any {
    const commentUrl = `http://localhost:4231/api/news/addComment/${id}`;
    return this.http.patch(commentUrl, data);
  }
}
