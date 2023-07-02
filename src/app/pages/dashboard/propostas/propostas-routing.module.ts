import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPropostaComponent } from './criar-proposta/criar-proposta.component';
import { PropostasComponent } from './propostas.component';

const routes: Routes = [
  {
    path: '',
    component: PropostasComponent,
  },
  {
    path: 'criar',
    component: CriarPropostaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropostasRoutingModule {}
