import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Features/home/home.component';
import { PostComponent } from './Features/home/post/post.component';
import { StoryComponent } from './Features/home/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
