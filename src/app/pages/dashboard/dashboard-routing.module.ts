import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'propostas',
        loadChildren: () =>
        import('./propostas/propostas.module').then(
          (m) => m.PropostasModule
        ),
      },
      {
        path: 'projetos',
        loadChildren: () =>
        import('./projetos/projetos.module').then(
          (m) => m.ProjetosModule
        ),
      },
      {
        path: 'clientes',
        loadChildren: () =>
        import('./clientes/clientes.module').then(
          (m) => m.ClientesModule
        ),
      },
      {
        path: '',
        loadChildren: () =>
        import('./home/home.module').then(
          (m) => m.HomeModule
        ),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
