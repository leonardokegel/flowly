import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratosComponent } from './contratos.component';
import { ContratosRoutingModule } from './contratos-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ContratosComponent
  ],
  imports: [
    CommonModule, ContratosRoutingModule, SharedModule
  ]
})
export class ContratosModule { }
