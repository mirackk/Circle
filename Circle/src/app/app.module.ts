import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Shared/navigation/navigation.component';
import { ProfileComponent } from './Features/profile/profile.component';
import { ProfilePostsComponent } from './Features/profile/profile-posts/profile-posts.component';
import { ProfileLikesComponent } from './Features/profile/profile-likes/profile-likes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    ProfilePostsComponent,
    ProfileLikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
