import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropostasComponent } from './propostas.component';

const routes: Routes = [
  {
    path: '',
    component: PropostasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropostasRoutingModule {}
