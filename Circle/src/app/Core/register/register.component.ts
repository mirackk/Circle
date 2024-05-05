import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
  export class RegisterComponent implements OnInit {
    signUpForm = new FormGroup({
      userName: new FormControl(''),
      userEmail: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  
    constructor(private fb: FormBuilder, private http: HttpClient, private registerService: RegisterService) {}
  
    ngOnInit() {
      this.signUpForm = this.fb.group({
        userName: ['', {
          validators: [Validators.required],
          asyncValidators: [this.usernameValidator()],
          updateOn: 'blur'
        }],
        userEmail: ['', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.emailValidator()],
          updateOn: 'blur'
        }],
        password: ['', {
          updateOn: 'blur', 
          validators:[Validators.required, this.passwordValidator()]
        }],
        confirmPassword: ['', [Validators.required]]
      }, {
        validators: [this.confirmPasswordValidator()]
      });
    }


    private usernameValidator(): AsyncValidatorFn {
      return (control: AbstractControl) => {
        return this.http.get<{exists: boolean}>(`http://localhost:4231/api/register/checkExistByUsername/${control.value}`)
          .pipe(
            map(result => {
              console.log(result);
              return result ? { usernameExists: true } : null;
            })
          );
      };
    }

    private emailValidator(): AsyncValidatorFn {
      return (control: AbstractControl) => {
        return this.http.get<{exists: boolean}>(`http://localhost:4231/api/register/checkExistByEmail/${control.value}`)
          .pipe(
            map(result => {
              console.log(result);
              return result ? { emailExists: true }: null ;
            })
          );
      };
    }
  
      private passwordValidator(): Validators {
        return (control: { value: string; }) => {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*.])(?=.{8,})/;
          return regex.test(control.value) ? null : { passwordStrength: true };
        };
      }

      private confirmPasswordValidator(): Validators {
        return (group: FormGroup) => {
          const password = group.controls['password'].value;
          const confirmPassword = group.controls['confirmPassword'].value;
          return password === confirmPassword ? null : { passwordMismatch: true };
        };
      }
  
    onSubmit() {
      if (this.signUpForm.valid) {
        const { confirmPassword, ...formData } = this.signUpForm.value;
        this.registerService.handleRegistration(formData);
      } else {
        console.error('Form is not valid');
        alert('Please fill out the form correctly.');
      }
    }
  }

