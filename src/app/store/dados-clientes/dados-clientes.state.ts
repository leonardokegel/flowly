import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { IDadosClientesState } from '../app-state';
import {
  EditCliente,
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

  @Action(EditCliente)
  editCliente(
    ctx: StateContext<IDadosClientesState[]>,
    payload: SetCliente
  ) {
    const state = ctx.getState();

    const newState = state.filter((e) => e.id !== payload.cliente.id);
    ctx.setState([...newState, payload.cliente]);

  }
}
