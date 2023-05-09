import { Component, Input } from '@angular/core';
import { SidebarLink } from '../sidebar-link/sidebar-link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input()
  sidebarLinks: SidebarLink[] = [
    { label: 'Dashboard', url: '/dashboard', icon: 'dashboard' },
    { label: 'Clientes', url: '/clientes', icon: 'clientes' }
  ];

  mouseOver: Boolean = false;

  onMouseEnter() {
    this.mouseOver = true
  }

  onMouseLeave() {
    this.mouseOver = false
  }
}
