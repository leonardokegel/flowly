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
  open = new EventEmitter<boolean>();

  isOpen = false;

  constructor() {
    this.open.subscribe((open: boolean) => {
      this.isOpen = open;
    });
  }

  onClick() {
    this.isOpen ? this.open.emit(false): this.open.emit(true);
  }
}
