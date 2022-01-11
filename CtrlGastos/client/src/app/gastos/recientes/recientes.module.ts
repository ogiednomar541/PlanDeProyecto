import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecientesComponent } from './recientes.component';



@NgModule({
  declarations: [
    RecientesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecientesComponent
  ]
})
export class RecientesModule { }
