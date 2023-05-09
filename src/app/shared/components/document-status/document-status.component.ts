import { Component, Input } from '@angular/core';

interface DocumentStatus {
  title: string
  client: string
  status: number
}

@Component({
  selector: 'app-document-status',
  templateUrl: './document-status.component.html',
  styleUrls: ['./document-status.component.scss']
})
export class DocumentStatusComponent {
  @Input()
  documentStatus: DocumentStatus[] = [
    {title: 'Ciação de site', client: 'Fulano de tal', status: 1},
    {title: 'Desenvolvimento de Aplicação', client: 'Cicrano', status: 2},
  ];
}
