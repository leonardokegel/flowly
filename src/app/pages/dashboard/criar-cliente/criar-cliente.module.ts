import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarClienteComponent } from './criar-cliente.component';
import { CriarClienteRoutingModule } from './criar-cliente-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CriarClienteComponent
  ],
  imports: [
    CommonModule, CriarClienteRoutingModule, SharedModule
  ]
})
export class CriarClienteModule { }
