import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DualertComponent } from './dualert.component';



@NgModule({
  declarations: [
    DualertComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [DualertComponent]
})
export class DualertModule { }
