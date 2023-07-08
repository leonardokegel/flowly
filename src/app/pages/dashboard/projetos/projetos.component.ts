import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ProjectsRow } from '@shared/components/table-list/table-list.model';
import { ModalService } from '@shared/modal/modal.service';
import { ProjetosService } from './projetos.service';
import { Store } from '@ngxs/store';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';
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
  ) {}

  openModal(modal: string, hasBackdropClick: boolean) {
    this.modalService.open(ModalComponent, {
      data: {
        modalType: modal,
      },
      hasBackdropClick: hasBackdropClick,
    });
  }

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
}
