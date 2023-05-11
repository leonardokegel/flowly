import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sidebarHovered = false;
  menuOpen = false;

  onHovered(hovered: boolean) {
    this.sidebarHovered = hovered;
  }

  onClick(open: boolean) {
    this.menuOpen = open;
  }
}
