import { IDadosSessaoState } from './../app-state';

export class ObterDadosSessaoAction {
  static readonly type = '[Dados Sessão] Obter';
  constructor(public dadosSessao: IDadosSessaoState) {}
}
