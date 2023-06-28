import { Component, Input } from '@angular/core';

interface DocumentStatus {
  id: string
  title: string
  client: {
    id: string
    name: string
  }
  status: number
}

@Component({
  selector: 'app-document-status',
  templateUrl: './document-status.component.html',
  styleUrls: ['./document-status.component.scss']
})
export class DocumentStatusComponent {
  @Input()
  documentType!: 'proposta' | 'contrato';

  @Input()
  documentStatus: DocumentStatus[] = [
    { id: '1', title: 'Ciação de site', client: {id: '1', name: 'Fulano de tal' }, status: 1 },
    { id: '2', title: 'Desenvolvimento de Aplicação', client: {id: '2', name: 'Cicrano' }, status: 2 },
    { id: '3', title: 'Design de Logo', client: {id: '3', name: 'Fulaninho' }, status: 4 }
  ];
}
