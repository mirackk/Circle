import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/login';  // api address
  private loginEmail = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(name: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username:name, password: password });
  }

  handleLogin(name:string, password: string): void {
    console.log('name', name, 'password', password);
    this.login(name, password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/home']);  // when sucessful, navigate to home page

        // store user info in local storage
        // {
        //   "name": "Mirack Test",
        //   "userName": "mirack_test",
        //   "userEmail": "mirack@test.com",
        //   "userRole": "user",
        //   "age": 30,
        //   "gender": "Male",
        //   "phone": 1234567890,
        // }
        console.log('response', response);
        localStorage.setItem('accessToken', response.accessToken);
        // localStorage.setItem('userName', response.userName);
        // localStorage.setItem('userEmail', response.userEmail);
        // localStorage.setItem('userRole', response.userRole);
      },
      error: (error) => {
        console.error('test', error);
        console.error('Login failed', error);
      }
    });
  }
}
