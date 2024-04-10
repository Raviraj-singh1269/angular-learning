import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropsRoutingModule } from './props-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    PropsRoutingModule
  ],
  exports: [
    ParentComponent,
    ChildComponent
  ]
})
export class PropsModule { }
