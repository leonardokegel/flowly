import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ProposalsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { IDadosClientesState } from 'src/app/store/app-state';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';
import { switchMap, take } from 'rxjs';
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
    this.href = this.router.url
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
        this.isLoading = false;
      });

  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteProposta(proposta: any) {
    this.modalService.open(ModalComponent, {
      data: {
        modalType: 'CONFIRM',
        content: {
          titulo: 'Deletar Proposta',
          subtitulo: `Tem certeza que deseja deletar ${proposta.titulo}`,
          label: 'deletar',
        }
      },
      hasBackdropClick: true,
    }).afterClosed().subscribe(result => {
      if (result) {
        this.service
          .deletar(proposta.id)
          .pipe(take(1))
          .subscribe({
            next: () => {
              this.router
                .navigateByUrl('/', { skipLocationChange: true })
                .then(() => this.router.navigate([this.href]));
            },
            error: (err) => console.log(err),
          });
      }
    })
  }
}