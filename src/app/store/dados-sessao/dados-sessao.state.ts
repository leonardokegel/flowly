import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { IDadosSessaoState } from './../app-state';
import { ObterDadosSessaoAction, RemoverDadosSessaoAction } from './dados-sessao.action';

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
    const dadosSessao = getState();
    const { id, email, nome, token } = dadosSessao;

    if (!id || !email || !nome || !token) {
      localStorage.setItem('dadosSessao', JSON.stringify(payload.dadosSessao));
      patchState(payload.dadosSessao);
    }
  }

  @Action(RemoverDadosSessaoAction)
  removerDadosClientesAction(ctx: StateContext<IDadosSessaoState>) {
    ctx.setState({
      id: '',
      nome: '',
      email: '',
      token: '',
    });
  }
}
