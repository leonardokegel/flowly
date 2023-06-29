import { Component, OnInit } from '@angular/core';
import { ProjectsRow } from '@shared/components/table-list/table-list.model';
import { ModalComponent } from '@shared/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  projects!: ProjectsRow[];

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
    this.projects = [
      {
        id: '1',
        titulo: 'Desenvolvimento do cicrApp',
        status: 0,
        cliente: {
            id: '1',
            empresa: 'Cricrano Inc.',
            nome: 'Cicrano Cicranildo',
        },
        data_inicio: '11/08/2023',
        valor: 'R$ 25000.00',
      }
    ]
  }
}
