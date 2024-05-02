import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
  export class RegisterComponent implements OnInit {
    signUpForm!: FormGroup;
  
    constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {}
  
    ngOnInit() {
      this.signUpForm = this.formBuilder.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        userEmail: ['', [Validators.required, Validators.email]]
      });
    }
  
    onSubmit() {
      if (this.signUpForm.valid) {
        const { confirmPassword, ...formData } = this.signUpForm.value; // not use confirmPassword
        this.registerService.handleRegistration(formData);
      } else {
        console.error('Form is not valid');
        alert('Please fill out the form correctly.');
      }
    }
  }