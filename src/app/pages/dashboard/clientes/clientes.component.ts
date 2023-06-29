import { Component, OnInit } from '@angular/core';
import { ClientRow } from '@shared/components/table-list/table-list.model';
import { ModalComponent } from '@shared/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clients!: ClientRow[];

  constructor(private modalService: ModalService) { }

  openModal(modal: string, hasBackdropClick: boolean) {
    this.modalService.open(
      ModalComponent,
      {
        data:
        {
          title: 'Modal',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          modalType: modal
        },
        hasBackdropClick: hasBackdropClick
      }
    );

    console.log('Open', modal);
  }

  ngOnInit(): void {
    this.clients = [
      {
        id: '1',
        empresa: 'Fulano Inc.',
        nome: 'Fulano de Tal Algumacoisa',
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
        empresa: 'Cicrano Inc.',
        nome: 'Cicrano Cicranildo',
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
