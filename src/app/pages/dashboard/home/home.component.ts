import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ProjectStatus } from '@shared/components/project-status/project-status.component';
import { ContractsRow, ProjectsRow, ProposalsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { switchMap, take } from 'rxjs';
import { IDadosClientesState } from 'src/app/store/app-state';

import { ContratosService } from '../contratos/contratos.service';
import { ProjetosService } from '../projetos/projetos.service';
import { PropostasService } from '../propostas/propostas.service';
import { DadosClienteState } from './../../../store/dados-clientes/dados-clientes.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  proposals!: ProposalsRow[];
  contracts!: ContractsRow[];
  isLoading = false;
  status: ProjectStatus[] = [];

  constructor(
    private modalService: ModalService,
    private propostaService: PropostasService,
    private contratoService: ContratosService,
    private store: Store,
    private serviceProject: ProjetosService
  ) {}

  openModal(modal: string) {
    this.modalService.open(ModalComponent, {
      data: {
        modalType: modal,
      },
      hasBackdropClick: true,
    });
  }

  ngOnInit(): void {
    this.getPropostas();
    this.getContratos();
    this.getProjetos();
  }

  getPropostas(): void {
    this.isLoading = true;
    const ids: string[] = [];
    this.store
      .select(DadosClienteState)
      .pipe(
        switchMap((clientes: IDadosClientesState[]) => {
          clientes.map((e: IDadosClientesState) => ids.push(e.id));
          return this.propostaService.getPropostas(ids).pipe(take(1));
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
          return this.contratoService.getContratos(ids).pipe(take(1));
        })
      )
      .subscribe((e) => {
        this.contracts = e.slice(0, 5);
        this.isLoading = false;
      });
  }

  getProjetos() {
    this.isLoading = true;
    const ids: string[] = [];
    this.store
      .select(DadosClienteState)
      .pipe(
        switchMap((clientes: IDadosClientesState[]) => {
          clientes.map((e: IDadosClientesState) => ids.push(e.id));
          return this.serviceProject.buscar(ids);
        })
      )
      .subscribe((e) => {
        this.status = this.projectStatus(e);
        this.isLoading = false;
      });
  }

  projectStatus(projetos: ProjectsRow[]): ProjectStatus[] {
    const status: ProjectStatus[] = [
      { title: 'Rascunho', count: this.countStatus(projetos, 0) },
      { title: 'Enviado', count: this.countStatus(projetos, 1) },
      { title: 'Visualizado', count: this.countStatus(projetos, 2) },
      { title: 'Rejeitado', count: this.countStatus(projetos, 3) },
      { title: 'Aceito', count: this.countStatus(projetos, 4) },
      { title: 'Assinado', count: this.countStatus(projetos, 5) },
    ];
    return status;
  }

  countStatus(projetos: ProjectsRow[], status: number): string {
    const count = projetos.filter(
      (projeto) => projeto.status === status
    )?.length;
    return count?.toString();
  }

  createProposta() {
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'CREATE_PROPOSTA',
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result[0]) {
          result[1].status = 1;
          const { titulo, cliente, status } = result[1];
          this.propostaService
            .criar(titulo, cliente, status)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.getContratos();
                this.modalService.openNotification({
                  data: {
                    message: `Contrato "${titulo}" criado com sucesso!`,
                    color: 'success',
                  },
                });
              },
              error: (err) => console.log(err),
            });
        }
      });
  }

  createContrato() {
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'CREATE_CONTRATO',
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result[0]) {
          result[1].status = 1;
          const { titulo, cliente, status } = result[1];
          this.contratoService
            .criar(titulo, cliente, status)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.getContratos();
                this.modalService.openNotification({
                  data: {
                    message: `Contrato "${titulo}" criado com sucesso!`,
                    color: 'success',
                  },
                });
              },
              error: (err) => console.log(err),
            });
        }
      });
  }
}
