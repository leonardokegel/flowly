import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { IDadosSessaoState } from './../../../store/app-state';
import { DadosSessaoState } from './../../../store/dados-sessao/dados-sessao.state';

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

  @Select(DadosSessaoState)
  userName$: Observable<IDadosSessaoState> | undefined;

  constructor() {
    this.userName$?.subscribe((e) => {
      console.log(e);
    });

    this.openSidebar.subscribe((open: boolean) => {
      this.isOpen = open;
    });
  }

  onClick() {
    this.isOpen ? this.openSidebar.emit(false) : this.openSidebar.emit(true);
  }
}
