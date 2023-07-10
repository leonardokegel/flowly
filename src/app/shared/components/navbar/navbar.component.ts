import { RemoverDadosSessaoAction } from './../../../store/dados-sessao/dados-sessao.action';
import { RemoverDadosClientesAction } from './../../../store/dados-clientes/dados-clientes.action';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { DadosSessaoState } from './../../../store/dados-sessao/dados-sessao.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input()
  sidebarHovered = false;

  @Output()
  openSidebar = new EventEmitter<boolean>();

  isOpen = false;

  userName = '';

  initials: string | undefined;
  circleColor: string | undefined;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];

  constructor(private router: Router, private store: Store) {

    this.openSidebar.subscribe((open: boolean) => {
      this.isOpen = open;
    });
  }

  ngOnInit(): void {
    this.store.select(DadosSessaoState).subscribe((e) => {
      this.userName = e.nome;
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

      this.initials = initials;
    });

  }

  onClick() {
    this.isOpen ? this.openSidebar.emit(false) : this.openSidebar.emit(true);
  }

  logout() {
    localStorage.removeItem('dadosSessao');
    localStorage.clear();
    this.store.dispatch(RemoverDadosClientesAction);
    this.store.dispatch(RemoverDadosSessaoAction);
    this.router.navigate(['/sign-in']);
  }
}
