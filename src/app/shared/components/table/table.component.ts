import { Component, Input, OnInit } from '@angular/core';
import { Row } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  columns: string[] = ['Contato', 'E-mail', 'Telefone', 'Propostas', 'Contratos']

  @Input()
  rows: Row[] = [
    {
      id: '1',
      nome: 'Fulano',
      email: 'fulano@email.com',
      telefone: '51991698987',
      propostas: [
        {
          id: '1',
          titulo: 'Proposta de Desenvolvimento',
          status: 1,
        },
        {
          id: '2',
          titulo: 'Proposta Inicial',
          status: 5,
        }
      ],
      contratos: [
        {
          id: '1',
          titulo: 'Contrato de Desenvolvimento',
          status: 0,
        }
      ]
    }
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowsArray: any[] = [];
  columnMaxWidth = 'max-w-[100%]';

  ngOnInit(): void {
    this.rowsArray = this.rows.map(row => Object.entries(row));
    this.columnMaxWidth = `max-w-[${100 / this.columns.length}%]`;
  }
}
