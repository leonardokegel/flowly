import { IDadosClientesState } from "../app-state";

export class ObterDadosClientesAction {
  static readonly type = '[Dados Clientes] Obter';
  constructor(public dadosClientes: IDadosClientesState[]) {}
}

export class RemoverDadosClientesAction {
  static readonly type = '[Dados Clientes] Remover';
}

export class SetCliente {
  static readonly type = '[Dados Clientes] Adicionar';
  constructor(public cliente: IDadosClientesState) {}
}

