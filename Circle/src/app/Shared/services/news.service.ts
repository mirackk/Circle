import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { newsItem, postData } from 'src/app/Features/home/story/story.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://localhost:4231/api/news';
  private newsList: newsItem[] = [];

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  post(data: postData) {
    return this.http.post(this.apiUrl, data);
  }

  setNews(data: newsItem[]) {
    this.newsList = data;
  }

  updateNews(data: newsItem) {
    this.newsList.push(data);
  }
}
