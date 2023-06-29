import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosComponent } from './projetos.component';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [CommonModule, ProjetosRoutingModule, SharedModule]
})
export class ProjetosModule { }
