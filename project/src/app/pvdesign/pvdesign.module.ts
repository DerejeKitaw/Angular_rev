import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { InverterComponent } from './inverter/inverter.component';

const routes: Routes = [
  { path: '', component: InverterComponent, data: {title: 'Inverter'} },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [InverterComponent]
})
export class PvdesignModule { }
export const routedComponents = [InverterComponent];