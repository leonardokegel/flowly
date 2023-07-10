import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  initials: string | undefined;
  circleColor: string | undefined;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];

  constructor(private router: Router) {
    this.userName$?.subscribe((e: any) => {
      console.log(e.nome);
      let initials = '';

      for (let i = 0; i < e?.nome?.length; i++) {
        if (e.nome.charAt(i) === ' ') {
          continue;
        }

        if (e?.nome?.charAt(i) === e?.nome?.charAt(i).toUpperCase()) {
          initials += e.nome.charAt(i);

          if (initials?.length == 2) {
            break;
          }
        }
      }

      this.circleColor =
        this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))];

      console.log(initials);
      console.log(this.initials);

      this.initials = initials;
      console.log(this.initials);
    });

    this.openSidebar.subscribe((open: boolean) => {
      this.isOpen = open;
    });
  }

  onClick() {
    this.isOpen ? this.openSidebar.emit(false) : this.openSidebar.emit(true);
  }

  logout() {
    localStorage.removeItem('dadosSessao');
    localStorage.clear();
    this.router.navigate(['/sign-in']);
  }
}
