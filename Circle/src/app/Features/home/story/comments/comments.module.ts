import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaycommentsPipe } from './displaycomments.pipe';
import { CommentsComponent } from './comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CommentsComponent,
    DisplaycommentsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
