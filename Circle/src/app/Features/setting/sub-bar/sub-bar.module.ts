import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeUsernameComponent } from './change-username/change-username.component';
import { SetProfileComponent } from './set-profile/set-profile.component';



@NgModule({
  declarations: [
    ChangePasswordComponent,
    ChangeUsernameComponent,
    SetProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubBarModule { }
