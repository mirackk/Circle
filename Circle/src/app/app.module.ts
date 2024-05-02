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
import { ProfilePostsStoryComponent } from './Features/profile/profile-posts-story/profile-posts-story.component';
import { LoginComponent } from './Core/login/login.component';
import { RegisterComponent } from './Core/register/register.component';

// Modules
import { StoryModule } from './Features/home/story/story.module';
import { CommentsModule } from './Features/home/story/comments/comments.module';
import { FormsModule } from '@angular/forms';
// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

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
    ProfilePostsStoryComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    StoryModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    CommentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
