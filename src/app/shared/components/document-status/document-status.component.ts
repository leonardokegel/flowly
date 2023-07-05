import { Component, Input } from '@angular/core';
import { ContractsRow, ProposalsRow } from '../table-list/table-list.model';

@Component({
  selector: 'app-document-status',
  templateUrl: './document-status.component.html',
  styleUrls: ['./document-status.component.scss']
})
export class DocumentStatusComponent {
  @Input()
  documentType!: 'proposta' | 'contrato';

  @Input()
  documents: ProposalsRow[] | ContractsRow[] = [
    { id: '1', titulo: 'Ciação de site', cliente: {id: '1', nome: 'Fulano de tal', empresa: 'Fulanos Inc' }, status: 1 },
    { id: '1', titulo: 'Desenvolvimento de Aplicação', cliente: {id: '1', nome: 'Fulaninho', empresa: 'Fulaninho Lmt' }, status: 2 },
    { id: '1', titulo: 'Design de Logo', cliente: {id: '1', nome: 'Cicrano', empresa: 'Cicranos' }, status: 4 },
  ];
}