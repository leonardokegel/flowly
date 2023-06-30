import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ContractsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {
  contracts!: ContractsRow[];

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
    this.contracts = [
      {
        id: '1',
        titulo: 'Desenvolvimento do cicrApp',
        status: 1,
        cliente: {
            id: '1',
            empresa: 'Cricrano Inc.',
            nome: 'Cicrano Cicranildo',
        },
      }
    ]
  }
}
