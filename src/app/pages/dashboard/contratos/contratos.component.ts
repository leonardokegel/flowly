import { switchMap, take } from 'rxjs';
import { ContratosService } from './contratos.service';
import { Component, OnInit } from '@angular/core';
import { ContractsRow } from '@shared/components/table-list/table-list.model';
import { ModalComponent } from '@shared/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';
import { Store } from '@ngxs/store';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';
import { IDadosClientesState } from 'src/app/store/app-state';

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
    private service: ContratosService,
    private store: Store
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
    this.getContratos();
  }

  getContratos(): void {
    this.isLoading = true;
    const ids: string[] = [];
    this.store
      .select(DadosClienteState)
      .pipe(
        switchMap((clientes: IDadosClientesState[]) => {
          clientes.map((e: IDadosClientesState) => ids.push(e.id));
          return this.service.getContratos(ids).pipe(take(1));
        })
      )
      .subscribe((e) => {
        this.contracts = e;
        this.isLoading = false;
      });
  }
}
