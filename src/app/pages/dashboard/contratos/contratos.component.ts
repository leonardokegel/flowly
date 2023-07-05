import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ContractsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { switchMap, take } from 'rxjs';
import { IDadosClientesState } from 'src/app/store/app-state';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';

import { ContratosService } from './contratos.service';
import { Router } from '@angular/router';

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
    private store: Store,
    private router: Router
  ) { }

  openModal(modal: string, hasBackdropClick: boolean) {
    this.modalService.open(ModalComponent, {
      data: {
        modalType: modal,
      },
      hasBackdropClick: hasBackdropClick,
    });
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

  deleteContrato(evento: any) {
    this.service
      .deletar(evento[1])
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['/dashboard/contratos']));
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
