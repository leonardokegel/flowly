import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { IDadosClientesState } from '../app-state';
import {
  ObterDadosClientesAction,
  RemoverDadosClientesAction,
  SetCliente,
} from './dados-clientes.action';

@State<IDadosClientesState[]>({
  name: 'DadosClientes',
  defaults: [],
})
@Injectable()
export class DadosClienteState {
  @Action(ObterDadosClientesAction)
  obterDadosClientesAction(
    ctx: StateContext<IDadosClientesState[]>,
    payload: ObterDadosClientesAction
  ) {
    const clientesState = ctx.getState();
    if (clientesState.length === 0) {
      ctx.setState(payload.dadosClientes);
    }
  }

  @Action(RemoverDadosClientesAction)
  removerDadosClientesAction(ctx: StateContext<IDadosClientesState[]>) {
    ctx.setState([]);
  }

  @Action(SetCliente)
  setCliente(
    ctx: StateContext<IDadosClientesState[]>,
    payload: SetCliente
  ) {
    const cliente = ctx.getState();

    ctx.setState([...cliente, payload.cliente]);
  }
}
