import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:4231/api/login';  // api address
  private loginEmail = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { userEmail: email, password: password });
  }

  handleLogin(email: string, password: string): void {
    this.login(email, password).subscribe({
      next: (response) => {
        // console.log('Login successful', response);
        this.router.navigate(['/home']);  // when sucessful, navigate to home page
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }

  setEmail(data: string) {
    this.loginEmail = data;
  }

  getEmail() {
    return this.loginEmail;
  }
}
