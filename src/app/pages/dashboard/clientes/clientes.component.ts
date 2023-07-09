import { EditCliente, RemoverDadosClientesAction } from './../../../store/dados-clientes/dados-clientes.action';
import { DadosSessaoState } from './../../../store/dados-sessao/dados-sessao.state';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ClientRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { switchMap, take } from 'rxjs';
import { IDadosClientesState, IDadosSessaoState } from 'src/app/store/app-state';

import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clients: ClientRow[] = [];
  isLoading = false;
  href = '';

  constructor(
    private modalService: ModalService,
    private store: Store,
    private service: ClientesService,
    private router: Router
  ) {
    this.href = this.router.url;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openModal(modal: string, content?: any) {
    this.modalService.open(ModalComponent, {
      data: {
        modalType: modal,
        content: content,
      },
      hasBackdropClick: true,
    });
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.isLoading = true;

    this.store
      .select(DadosSessaoState)
      .pipe(
        switchMap((e: IDadosSessaoState) => {
          return this.service.getClientes(e.id).pipe(take(1));
        })
      )
      .subscribe({
        next: (e) => {
          this.clients = e as ClientRow[];
          this.isLoading = false;
        },
        error: (err) => console.log(err),
      });
  }

  deleteCliente(cliente: any) {
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'CONFIRM',
          content: {
            titulo: 'Deletar Cliente',
            subtitulo: `Tem certeza que deseja deletar ${cliente.nome}?`,
            label: 'deletar',
          },
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.service
            .deletar(cliente.id)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.store.dispatch(RemoverDadosClientesAction);
                this.router
                  .navigateByUrl('/', { skipLocationChange: true })
                  .then(() => this.router.navigate([this.href]));

                this.modalService.openNotification({
                  data: {
                    message: `Cliente "${cliente.nome}" deletado`,
                    color: 'danger',
                  },
                });
              },
              error: () =>
                this.modalService.openNotification({
                  data: {
                    message: `Erro ao deletar o cliente!`,
                    color: 'danger',
                  },
                }),
            });
        }
      });
  }

  editCliente(cliente: any) {
    const id: string = cliente.id;
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'EDIT_CLIENTE',
          cliente,
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe({
        next: (e) => {
          if (e[0]) {
            const { empresa, email, nome } = e[1];
            this.service.editar({ id, empresa, nome, email }).subscribe({
              next: (e) => {
                this.store.dispatch(new EditCliente(e as IDadosClientesState));
                this.getClients();
                this.modalService.openNotification({
                  data: {
                    message: `Cliente "${e.nome}" alterado!`,
                    color: 'success',
                  },
                });
              },
            });
          }
        },
      });
  }
}
