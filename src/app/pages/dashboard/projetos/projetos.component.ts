import { DadosClienteState } from './../../../store/dados-clientes/dados-clientes.state';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { switchMap, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ProjectsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { ProjetosService } from './projetos.service';
import { Store } from '@ngxs/store';
import { IDadosClientesState } from 'src/app/store/app-state';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent implements OnInit {
  projects: ProjectsRow[] = [];
  isLoading = false;

  constructor(
    private modalService: ModalService,
    private service: ProjetosService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getProjetos();
  }

  getProjetos() {
    this.isLoading = true;
    const ids: string[] = [];
    this.store
      .select(DadosClienteState)
      .pipe(
        switchMap((clientes: IDadosClientesState[]) => {
          clientes.map((e: IDadosClientesState) => ids.push(e.id));
          return this.service.buscar(ids);
        })
      )
      .subscribe((e) => {
        this.projects = e;
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      });
  }

  createProjeto() {
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'CREATE_PROJETO',
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result[0]) {
            const { status, titulo, data_inicio, valor, descricao, cliente } =
              result[1];
            this.service
              .cadastrar(cliente, {
                status,
                titulo,
                data_inicio,
                valor,
                descricao,
              })
              .subscribe({
                next: (e) => {
                  this.getProjetos();
                  this.modalService.openNotification({
                    data: {
                      message: `Projeto "${e.titulo}" criado com sucesso!`,
                      color: 'success',
                    },
                  });
                },
                error: (err) =>
                  this.modalService.openNotification({
                    data: {
                      message: `Erro ao tentar criar projeto: ${err.message}`,
                      color: 'danger',
                    },
                  }),
              });
          }
        },
      });
  }

  deleteProjeto(projeto: any) {
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'CONFIRM',
          content: {
            titulo: 'Deletar Projeto',
            subtitulo: `Tem certeza que deseja deletar "${projeto.titulo}"?`,
            label: 'deletar',
          },
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.service
            .deletar(projeto.id)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.getProjetos();
                this.modalService.openNotification({
                  data: {
                    message: `Projeto "${projeto.titulo}" deletado!`,
                    color: 'success',
                  },
                });
              },
              error: (err) =>
                this.modalService.openNotification({
                  data: {
                    message: `Erro ao tentar deletar: ${err.message}`,
                    color: 'danger',
                  },
                }),
            });
        }
      });
  }

  editProjeto(projeto: any) {
    this.modalService
      .open(ModalComponent, {
        data: {
          modalType: 'EDIT_PROJETO',
          projeto,
        },
        hasBackdropClick: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result[0]) {
          const { status, titulo, data_inicio, valor, descricao } = result[1];
          this.service
            .editar({
              id: projeto.id,
              status,
              titulo,
              data_inicio,
              valor,
              descricao,
            })
            .pipe(take(1))
            .subscribe({
              next: (e) => {
                this.getProjetos();
                this.modalService.openNotification({
                  data: {
                    message: `Projeto "${e.titulo}" editado com sucesso`,
                    color: 'success',
                  },
                });
              },
              error: (err) =>
                this.modalService.openNotification({
                  data: {
                    message: `Erro ao tentar editar projeto: ${err.message}`,
                    color: 'danger',
                  },
                }),
            });
        }
      });
  }
}
