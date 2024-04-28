import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SubBarComponent } from './sub-bar/sub-bar.component';



@NgModule({
  declarations: [
    SettingComponent,
    SubBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingModule { }
