import { Component } from '@angular/core';
import { SidebarLink } from '@shared/components/sidebar-link/sidebar-link';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sidebarHovered = false;
  menuOpen = false;
  sidebarLinks: SidebarLink[] = [
    { label: 'Dashboard', url: '/dashboard', icon: 'dashboard' },
    { label: 'Clientes', url: '/dashboard/clientes', icon: 'clientes' },
    { label: 'Projetos', url: '/dashboard/projetos', icon: 'projetos' },
    { label: 'Propostas', url: '/dashboard/propostas', icon: 'propostas' },
    { label: 'Contratos', url: '/dashboard/contratos', icon: 'contratos' }
  ];

  onSidebarHovered(hovered: boolean) {
    this.sidebarHovered = hovered;
  }

  onMenuClick(open: boolean) {
    this.menuOpen = open;
  }
}
