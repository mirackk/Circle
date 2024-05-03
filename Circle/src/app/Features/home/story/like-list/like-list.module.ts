import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeListComponent } from './like-list.component';
import { DisplaylikesPipe } from './displaylikes.pipe';
import { FormsModule } from '@angular/forms';

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
    LikeListComponent,
    DisplaylikesPipe
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
  ],
  exports: [
    LikeListComponent
  ]
})
export class LikeListModule { }
