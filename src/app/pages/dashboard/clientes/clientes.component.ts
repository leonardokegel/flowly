import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ClientRow } from '@shared/components/table-list/table-list.model';
import { ModalComponent } from '@shared/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';
import { switchMap, take } from 'rxjs';
import { IDadosSessaoState } from 'src/app/store/app-state';
import { DadosSessaoState } from 'src/app/store/dados-sessao/dados-sessao.state';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clients: ClientRow[] = [];
  isLoading = false;

  constructor(
    private modalService: ModalService,
    private store: Store,
    private service: ClientesService
  ) {}

  openModal(modal: string, hasBackdropClick: boolean) {
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
}
