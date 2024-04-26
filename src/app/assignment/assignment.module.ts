import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from './assignment.component';
import { AutoHideDirective } from './auto-hide.directive';
import { ShortTextPipe } from './short-text.pipe';



@NgModule({
  declarations: [
    AssignmentComponent,
    AutoHideDirective,
    ShortTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AssignmentComponent,
    ShortTextPipe
  ]
})
export class AssignmentModule { }
