import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  subscriptions?: Subscription[] = []; // Store the subscriptions in a list

  constructor(private http: HttpClient) { }

  patch(id: any, data: any) {
    const commentUrl = `http://localhost:4231/api/news/addComment/${id}`;
    this.subscriptions?.push(this.http.patch(commentUrl, data).subscribe());
  }

  ngOnDestory() {
    // Unsubscribing
    this.subscriptions?.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
