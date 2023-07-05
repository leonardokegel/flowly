import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ProposalsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { PropostasService } from './propostas.service';
import { Store } from '@ngxs/store';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';
import { switchMap, take } from 'rxjs';
import { IDadosClientesState } from 'src/app/store/app-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.scss'],
})
export class PropostasComponent implements OnInit {
  proposals!: ProposalsRow[];
  showModal = false;
  isLoading = false;

  constructor(
    private modalService: ModalService,
    private service: PropostasService,
    private store: Store,
    private router: Router
  ) {}

  openModal(modal: string, hasBackdropClick: boolean) {
    console.log(modal);

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
    this.getPropostas();
  }

  getPropostas() {
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

  toggleModal() {
    this.showModal = !this.showModal;
  }

  deleteProposta(id: any) {
    this.service
      .deleteProposta(id[1])
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['/dashboard/propostas']));
          console.log('excluido');
        },
        error: (err) => console.log(err),
      });
  }
}
