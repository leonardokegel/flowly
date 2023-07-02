import { take } from 'rxjs';
import { ContratosService } from './contratos.service';
import { Component, OnInit } from '@angular/core';
import { ContractsRow } from '@shared/components/table-list/table-list.model';
import { ModalComponent } from '@shared/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss'],
})
export class ContratosComponent implements OnInit {
  contracts: ContractsRow[] = [];
  isLoading = false;

  constructor(
    private modalService: ModalService,
    private service: ContratosService
  ) {}

  openModal(modal: string, hasBackdropClick: boolean) {
    this.modalService.open(ModalComponent, {
      data: {
        title: 'Modal',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        modalType: modal,
      },
      hasBackdropClick: hasBackdropClick,
    });

    console.log('Open', modal);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.service
      .getContratos('3')
      .pipe(take(1))
      .subscribe({
        next: (e) => {
          console.log(e)
          this.contracts = e;
          this.isLoading = false;
        },
        error: (err) => console.log(err),
      });
    // this.contracts = [
    //   {
    //     id: '1',
    //     titulo: 'Desenvolvimento do cicrApp',
    //     status: 1,
    //     cliente: {
    //         id: '1',
    //         empresa: 'Cricrano Inc.',
    //         nome: 'Cicrano Cicranildo',
    //     },
    //   }
    // ]
  }
}
