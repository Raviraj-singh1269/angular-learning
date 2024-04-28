import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SevicedemoRoutingModule } from './sevicedemo-routing.module';
import { DemousersComponent } from './demousers/demousers.component';


@NgModule({
  declarations: [
    DemousersComponent
  ],
  imports: [
    CommonModule,
    SevicedemoRoutingModule
  ],
  exports: [
    DemousersComponent
  ]
})
export class SevicedemoModule { }
