import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Features/home/home.component';
import { PostComponent } from './Features/home/post/post.component';
import { StoryComponent } from './Features/home/story/story.component';
import { NavigationComponent } from './Shared/navigation/navigation.component';
import { ProfileComponent } from './Features/profile/profile.component';
import { ProfilePostsComponent } from './Features/profile/profile-posts/profile-posts.component';
import { ProfileLikesComponent } from './Features/profile/profile-likes/profile-likes.component';
import { ForgetPasswordComponent } from './Core/forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    StoryComponent,
    NavigationComponent,
    ProfileComponent,
    ProfilePostsComponent,
    ProfileLikesComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
