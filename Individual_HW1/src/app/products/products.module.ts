import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { HideDirective } from './hide.directive';
import { DisplayPipe } from './display.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    HideDirective,
    DisplayPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
