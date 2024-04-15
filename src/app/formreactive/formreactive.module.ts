import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormreactiveRoutingModule } from './formreactive-routing.module';
import { TestformComponent } from './testform/testform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TestformComponent
  ],
  imports: [
    CommonModule,
    FormreactiveRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    TestformComponent
  ]
})
export class FormreactiveModule { }
