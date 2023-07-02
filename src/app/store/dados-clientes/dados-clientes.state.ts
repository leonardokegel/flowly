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
  obterDadosClientesAction(
    { getState, patchState }: StateContext<IDadosClientesState[]>,
    { dadosClientes }: { dadosClientes: IDadosClientesState[] }
  ) {
    const clientesState = getState();

    if (clientesState.length === 0) {
      patchState({ ...dadosClientes });
    }
  }

  @Action(RemoverDadosClientesAction)
  removerDadosClientesAction({
    patchState,
  }: StateContext<IDadosClientesState[]>) {
    patchState([]);
  }
}
