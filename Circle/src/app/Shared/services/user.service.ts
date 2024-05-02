import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// todo
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:4231/api/users/getAllUsers';

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}