import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    { label: 'Clientes', url: '/dashboard/clientes', icon: 'clientes' }
  ];

  @Input()
  isOpen = false;

  @Output() hovered = new EventEmitter<boolean>();

  isHovered = false;

  constructor() {
    this.hovered.subscribe((hovered: boolean) => {
      this.isHovered = hovered;
    });
  }
  
  onHover() {
    this.hovered.emit(true);
  }

  onLeave() {
    this.hovered.emit(false);
  }
}
