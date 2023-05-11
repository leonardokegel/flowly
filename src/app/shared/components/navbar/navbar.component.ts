import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() 
  sidebarHovered = false;
  
  @Output() 
  openSidebar = new EventEmitter<boolean>();

  isOpen = false;

  constructor() {
    this.openSidebar.subscribe((open: boolean) => {
      this.isOpen = open;
    });
  }

  onClick() {
    this.isOpen ? this.openSidebar.emit(false): this.openSidebar.emit(true);
  }
}
