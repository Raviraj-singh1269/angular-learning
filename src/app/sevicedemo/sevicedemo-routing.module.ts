import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemousersComponent } from './demousers/demousers.component';

const routes: Routes = [
  {
    path: 'users',
    component: DemousersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevicedemoRoutingModule { }
