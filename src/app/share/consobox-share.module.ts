import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import {MdButtonModule, MdInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
    MdButtonModule
  ],
  declarations: [
    IncrementComponent
  ],
  exports: [
    IncrementComponent
  ]
})
export class ConsoboxShareModule { }
