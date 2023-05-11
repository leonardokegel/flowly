import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sidebarHovered = false;
  menuOpen = false;
  popupOpen?: string;

  onSidebarHovered(hovered: boolean) {
    this.sidebarHovered = hovered;
  }

  onMenuClick(open: boolean) {
    this.menuOpen = open;
  }

  onCardIconClick(openPopup: string) {
    this.popupOpen = openPopup;
  }
}
