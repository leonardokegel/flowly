import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { CriarPropostaComponent } from './criar-proposta/criar-proposta.component';
import { PropostasRoutingModule } from './propostas-routing.module';
import { PropostasComponent } from './propostas.component';

@NgModule({
  declarations: [PropostasComponent, CriarPropostaComponent],
  imports: [
    CommonModule,
    FormsModule,
    PropostasRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PropostasModule {}
