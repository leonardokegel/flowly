import { Component, Input } from '@angular/core';
import { CurrentLink, SidebarLink } from './sidebar-link';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent {
  @Input()
  sidebarLink: SidebarLink = { label: 'Label', url: '#' };

  @Input()
  currentLink: CurrentLink = 'DEFAULT';

  @Input()
  sidebarHovered = false;
}
