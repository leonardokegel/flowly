import { DadosClienteState } from './../../../store/dados-clientes/dados-clientes.state';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ContractsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { switchMap, take } from 'rxjs';
import { IDadosClientesState } from 'src/app/store/app-state';

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
  href = '';

  constructor(
    private modalService: ModalService,
    private service: ContratosService,
    private store: Store,
    private router: Router
  ) {
    this.href = this.router.url;
  }

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
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      });
  }

  deleteContrato(contrato: any) {
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'CONFIRM',
          content: {
            titulo: 'Deletar Contrato',
            subtitulo: `Tem certeza que deseja deletar ${contrato.titulo}?`,
            label: 'deletar',
          },
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.service
            .deletar(contrato.id)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.getContratos();
                this.modalService.openNotification({
                  data: {
                    message: `Contrato "${contrato.titulo}" deletado`,
                    color: 'danger',
                  },
                });
              },
              error: () =>
                this.modalService.openNotification({
                  data: {
                    message: `Erro ao deletar o contrato!`,
                    color: 'danger',
                  },
                }),
            });
        }
      });
  }

  editContrato(contrato: any) {
    const id: string = contrato.id;
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'EDIT_CONTRATO',
          contrato,
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe({
        next: (e) => {
          if (e[0]) {
            const { titulo, status } = e[1];
            this.service
              .editar({id ,titulo, status })
              .pipe(take(1))
              .subscribe({
                next: (e) => {
                  this.getContratos();
                  this.modalService.openNotification({
                    data: {
                      message: `Contrato "${e.titulo}" alterado`,
                      color: 'success',
                    },
                  })
                },
                error: () =>
                  this.modalService.openNotification({
                    data: {
                      message: `Erro ao editar o contrato!`,
                      color: 'danger',
                    },
                  }),
              });
          }
        },
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
        if (result) {
          const { titulo, cliente } = result[1];
          this.service
            .criar(titulo, cliente)
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
