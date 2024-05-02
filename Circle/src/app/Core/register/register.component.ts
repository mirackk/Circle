import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
  export class RegisterComponent implements OnInit {
    signUpForm!: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit() {
      this.signUpForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]]
      });
    }
  
    onSubmit() {
      if (this.signUpForm.valid) {
        console.log(this.signUpForm.value);
      }
    }
  }