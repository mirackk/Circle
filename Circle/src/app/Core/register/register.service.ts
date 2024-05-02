import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl = 'http://localhost:4231/api/register/createNewAccount';  // 你的 API 端点地址

  constructor(private http: HttpClient, private router: Router) { }

  register(userData: any): Observable<any> {
    return this.http.post(this.registerUrl, userData);
  }

  handleRegistration(userData: any): void {
    this.register(userData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        alert('Registration failed: ' + error.error);
      }
    });
  }
}
