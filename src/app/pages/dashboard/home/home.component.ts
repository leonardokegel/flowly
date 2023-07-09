import { DadosClienteState } from './../../../store/dados-clientes/dados-clientes.state';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';
import { PropostasService } from '../propostas/propostas.service';
import { Store } from '@ngxs/store';
import { ContractsRow, ProjectsRow, ProposalsRow } from '@shared/components/table-list/table-list.model';
import { IDadosClientesState } from 'src/app/store/app-state';
import { switchMap, take } from 'rxjs';
import { ContratosService } from '../contratos/contratos.service';
import { ProjetosService } from '../projetos/projetos.service';
import { ProjectStatus } from '@shared/components/project-status/project-status.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  proposals!: ProposalsRow[];
  contracts!: ContractsRow[];
  isLoading = false;
  status: ProjectStatus[] = [];

  constructor(
    private modalService: ModalService,
    private serviceProposal: PropostasService,
    private serviceContract: ContratosService,
    private store: Store,
    private serviceProject: ProjetosService
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
        console.log(this.status)
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
    const count = projetos.filter((projeto) => projeto.status === status)?.length;
    return count?.toString();
  }
}
