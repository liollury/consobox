import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import {MdButtonModule, MdInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { InboxFloatingButtonComponent } from './inbox-floating-button/inbox-floating-button.component';
import { InboxFloatingButtonItemComponent } from './inbox-floating-button-item/inbox-floating-button-item.component';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
    MdButtonModule
  ],
  declarations: [
    IncrementComponent,
    InboxFloatingButtonComponent,
    InboxFloatingButtonItemComponent
  ],
  exports: [
    IncrementComponent,
    InboxFloatingButtonComponent,
    InboxFloatingButtonItemComponent
  ]
})
export class ConsoboxShareModule { }
