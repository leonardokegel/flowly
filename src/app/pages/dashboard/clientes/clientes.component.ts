import { Component, OnInit } from '@angular/core';
import { ClientRow } from '@shared/components/table-list/table-list.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clients!: ClientRow[];

  ngOnInit(): void {
    this.clients = [
      {
        id: '1',
        cliente: 'Fulano Inc.',
        contato: 'Fulano de Tal Algumacoisa',
        email: 'fulano@email.com',
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
      },
      {
        id: '1',
        cliente: 'Cicrano Inc.',
        contato: 'Cicrano Cicranildo',
        email: 'fulano@email.com',
        propostas: [
          {
            id: '1',
            titulo: 'Branding para Cicrano Inc.',
            status: 1,
          }
        ],
        contratos: []
      }
    ]
  }
}
