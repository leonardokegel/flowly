import { DadosClienteState } from './../../../store/dados-clientes/dados-clientes.state';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ProposalsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { switchMap, take } from 'rxjs';
import { IDadosClientesState } from 'src/app/store/app-state';

import { PropostasService } from './propostas.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.scss'],
})
export class PropostasComponent implements OnInit {
  proposals!: ProposalsRow[];
  isLoading = false;
  href = '';

  constructor(
    private modalService: ModalService,
    private service: PropostasService,
    private store: Store,
    private router: Router
  ) {
    this.href = this.router.url;
  }

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
  }

  getPropostas(): void {
    this.isLoading = true;
    const ids: string[] = [];
    this.store
      .select(DadosClienteState)
      .pipe(
        switchMap((clientes: IDadosClientesState[]) => {
          clientes.map((e: IDadosClientesState) => ids.push(e.id));
          return this.service.getPropostas(ids).pipe(take(1));
        })
      )
      .subscribe((e) => {
        this.proposals = e;
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      });
  }

  errorMessage = '';

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
        if (result) {
          const { titulo, cliente } = result[1];
          this.service
            .criar(titulo, cliente)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.getPropostas();
                this.modalService.openNotification({
                  data: {
                    message: `Proposta "${titulo}" criada com sucesso`,
                    color: 'success',
                  },
                });
              },
              error: (err) => console.log(err),
            });
        }
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteProposta(proposta: any) {
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'CONFIRM',
          content: {
            titulo: 'Deletar Proposta',
            subtitulo: `Tem certeza que deseja deletar ${proposta.titulo}`,
            label: 'deletar',
          },
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.service
            .deletar(proposta.id)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.router
                  .navigateByUrl('/', { skipLocationChange: true })
                  .then(() => this.router.navigate([this.href]));

                this.modalService.openNotification({
                  data: {
                    message: `Proposta "${proposta.titulo}" deletada`,
                    color: 'success',
                  },
                });
              },
              error: (err) => console.log(err),
            });
        }
      });
  }

  editProposta(proposta: any) {

    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'EDIT_PROPOSTA',
          proposta,
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result[0]) {
          const { titulo, status } = result[1];
          this.service
            .editar(proposta.id, {
              titulo: titulo,
              status: status,
            })
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.getPropostas();
                this.modalService.openNotification({
                  data: {
                    message: `Proposta "${proposta.titulo}" editada com sucesso`,
                    color: 'success',
                  },
                });
              },
              error: (err) => (this.errorMessage = err.mensagem),
            });
        }
      });
  }
}

export interface IProposta {
  id?: string;
  titulo: string;
  status: number;
}

export interface ICliente {
  empresa: string;
  id: number;
  nome: string;
}
