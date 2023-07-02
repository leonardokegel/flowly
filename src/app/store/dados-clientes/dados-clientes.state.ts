import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { IDadosClientesState } from '../app-state';
import {
  ObterDadosClientesAction,
  RemoverDadosClientesAction,
} from './dados-clientes.action';

@State<IDadosClientesState[]>({
  name: 'DadosClientes',
  defaults: [],
})
@Injectable()
export class DadosClienteState {
  @Action(ObterDadosClientesAction)
  obterDadosClientesAction(ctx: StateContext<IDadosClientesState[]>, payload: ObterDadosClientesAction) {
    const clientesState = ctx.getState();
    if (clientesState.length === 0) {
      ctx.setState(payload.dadosClientes);
    }
  }

  @Action(RemoverDadosClientesAction)
  removerDadosClientesAction({
    patchState,
  }: StateContext<IDadosClientesState[]>) {
    patchState([]);
  }
}
