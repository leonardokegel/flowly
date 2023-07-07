import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { IDadosSessaoState } from './store/app-state';
import { ObterDadosSessaoAction } from './store/dados-sessao/dados-sessao.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {
    const dadosSessaoLocalStorage: IDadosSessaoState = JSON.parse(
      localStorage.getItem('dadosSessao') || ''
    );

    if (dadosSessaoLocalStorage) {
      this.store.dispatch(new ObterDadosSessaoAction(dadosSessaoLocalStorage));
    }
  }

  title = 'flowly';
}
