import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { IDadosSessaoState } from './../app-state';
import { ObterDadosSessaoAction } from './dados-sessao.action';

@State<IDadosSessaoState>({
  name: 'DadosSessao',
  defaults: {
    id: '',
    nome: '',
    email: '',
    token: '',
  },
})
@Injectable()
export class DadosSessaoState {
  @Action(ObterDadosSessaoAction)
  obterDadosSessaoAction(
    { getState, patchState }: StateContext<IDadosSessaoState>,
    payload: { dadosSessao: IDadosSessaoState }
  ) {
    const { id, email, nome, token } = getState();

    if (!id || !email || !nome || !token) {
      patchState(payload.dadosSessao);
    }
  }
}