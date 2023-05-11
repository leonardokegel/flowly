import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sidebarHovered = false;

  onHovered(hovered: boolean) {
    this.sidebarHovered = hovered;
  }
}
