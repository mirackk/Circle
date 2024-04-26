import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { SingleUserProfileComponent } from './single-user-profile/single-user-profile.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    SingleUserProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
