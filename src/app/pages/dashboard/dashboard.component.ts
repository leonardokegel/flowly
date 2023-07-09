import { ObterDadosClientesAction } from './../../store/dados-clientes/dados-clientes.action';
import { DadosSessaoState } from './../../store/dados-sessao/dados-sessao.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SidebarLink } from '@shared/components/sidebar-link/sidebar-link';
import { ClientesService } from './clientes/clientes.service';
import { IDadosClientesState, IDadosSessaoState } from 'src/app/store/app-state';
import { switchMap, take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store, private clientesService: ClientesService) {}

  sidebarHovered = false;
  menuOpen = false;
  sidebarLinks: SidebarLink[] = [
    { label: 'Dashboard', url: '/dashboard', icon: 'dashboard' },
    { label: 'Clientes', url: '/dashboard/clientes', icon: 'clientes' },
    { label: 'Projetos', url: '/dashboard/projetos', icon: 'projetos' },
    { label: 'Propostas', url: '/dashboard/propostas', icon: 'propostas' },
    { label: 'Contratos', url: '/dashboard/contratos', icon: 'contratos' }
  ];

  ngOnInit(): void {
    this.store
    .select(DadosSessaoState)
    .pipe(
      switchMap((e: IDadosSessaoState) => {
        return this.clientesService.getClientes(e.id, 'simples').pipe(take(1));
      })
    )
    .subscribe({
      next: (e) => {
        this.store.dispatch(new ObterDadosClientesAction(e as IDadosClientesState[]));
      },
      error: (err) => console.log(err),
    });
  }

  onSidebarHovered(hovered: boolean) {
    this.sidebarHovered = hovered;
  }

  onMenuClick(open: boolean) {
    this.menuOpen = open;
  }
}
