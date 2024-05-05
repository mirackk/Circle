import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', { 
        updateOn: 'blur', 
        validators: [Validators.required, Validators.email], 
        asyncValidators: [this.emailValidator()] 
      }],
      password: ['', {
        updateOn: 'blur', 
        validators: [Validators.required, Validators.minLength(3)]
      }]
    });
  }

  private emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return this.http.get<{exists: boolean}>(`http://localhost:4231/api/register/checkExistByEmail/${control.value}`)
        .pipe(
          map(result => {
            return result ? null : { emailNotExisted: true } ;
          })
        );
    };
  }
  

  onSubmit(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email && password) {
      this.loginService.handleLogin(email, password);
      this.loginService.setEmail(email);

    } else {
      console.error('Email or password is missing!');
    }
  }

}
