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
  openMenu = new EventEmitter<boolean>();

  isOpen = false;

  constructor() {
    this.openMenu.subscribe((open: boolean) => {
      this.isOpen = open;
    });
  }

  onClick() {
    this.isOpen ? this.openMenu.emit(false): this.openMenu.emit(true);
  }
}
