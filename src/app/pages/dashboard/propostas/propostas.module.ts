import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropostasComponent } from './propostas.component';
import { SharedModule } from '@shared/shared.module';
import { PropostasRoutingModule } from './propostas-routing.module';

@NgModule({
  declarations: [
    PropostasComponent
  ],
  imports: [
    CommonModule, PropostasRoutingModule, SharedModule
  ]
})
export class PropostasModule { }
