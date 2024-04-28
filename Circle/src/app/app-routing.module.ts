import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Features/profile/profile.component';
import { SettingComponent } from './Features/setting/setting.component';
import { AdminComponent } from './Features/admin/admin.component';
import { LoginComponent } from './Core/login/login.component';
import { RegisterComponent } from './Core/register/register.component';
import { ForgetPasswordComponent } from './Core/forget-password/forget-password.component';
import { HomeComponent } from './Features/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  //deafault route
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'admin', component: AdminComponent }
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'forgetpassword', component: ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
