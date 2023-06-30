import { Component, OnInit } from '@angular/core';
import { ProposalsRow } from '@shared/components/table-list/table-list.model';
import { ModalComponent } from '@shared/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.scss']
})
export class PropostasComponent implements OnInit {
  proposals!: ProposalsRow[];

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
    this.proposals = [
      {
        id: '1',
        titulo: 'Desenvolvimento do cicrApp',
        status: 0,
        cliente: {
            id: '1',
            empresa: 'Cricrano Inc.',
            nome: 'Cicrano Cicranildo',
        },
      }
    ]
  }
}
