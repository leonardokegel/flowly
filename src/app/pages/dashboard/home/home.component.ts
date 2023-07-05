import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';
import { PropostasService } from '../propostas/propostas.service';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { ContractsRow, ProposalsRow } from '@shared/components/table-list/table-list.model';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';
import { IDadosClientesState } from 'src/app/store/app-state';
import { switchMap, take } from 'rxjs';
import { ContratosService } from '../contratos/contratos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  proposals!: ProposalsRow[];
  contracts!: ContractsRow[];
  isLoading = false;

  constructor(
    private modalService: ModalService,
    private serviceProposal: PropostasService,
    private serviceContract: ContratosService,
    private store: Store,
    private router: Router
  ) { }

  openModal(modal: string) {
    this.modalService.open(
      ModalComponent,
      {
        data: {
          modalType: modal
        },
        hasBackdropClick: true
      }
    );
  }

  ngOnInit(): void {
    this.getPropostas();
    this.getContratos();
  }

  getPropostas(): void {
    this.isLoading = true;
    const ids: string[] = [];
    this.store
      .select(DadosClienteState)
      .pipe(
        switchMap((clientes: IDadosClientesState[]) => {
          clientes.map((e: IDadosClientesState) => ids.push(e.id));
          return this.serviceProposal.getPropostas(ids).pipe(take(1));
        })
      )
      .subscribe((e) => {
        this.proposals = e.slice(0, 5);
        this.isLoading = false;
      });

  }

  getContratos(): void {
    this.isLoading = true;
    const ids: string[] = [];
    this.store
      .select(DadosClienteState)
      .pipe(
        switchMap((clientes: IDadosClientesState[]) => {
          clientes.map((e: IDadosClientesState) => ids.push(e.id));
          return this.serviceContract.getContratos(ids).pipe(take(1));
        })
      )
      .subscribe((e) => {
        this.contracts = e.slice(0, 5);
        this.isLoading = false;
      });

  }

}
