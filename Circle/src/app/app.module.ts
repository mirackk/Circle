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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './Features/admin/user-list/user-list.component';
import { AdminComponent } from './Features/admin/admin.component';

// Modules
import { StoryModule } from './Features/home/story/story.module';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    NavigationComponent,
    ProfileComponent,
    ProfilePostsComponent,
    ProfileLikesComponent,
    ForgetPasswordComponent,
    AdminComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    StoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
