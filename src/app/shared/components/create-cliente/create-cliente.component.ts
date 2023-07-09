import { DadosSessaoState } from './../../../store/dados-sessao/dados-sessao.state';
import { SetCliente } from './../../../store/dados-clientes/dados-clientes.action';
import { ClientesService } from './../../../pages/dashboard/clientes/clientes.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { switchMap, take } from 'rxjs';
import { IDadosClientesState, IDadosSessaoState } from 'src/app/store/app-state';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss'],
})
export class CreateClienteComponent {
  href = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalRef: ModalRef,
    private service: ClientesService,
    private store: Store,
    private router: Router,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    @Inject(MODAL_DATA) public data: any
  ) {
    this.href = this.router.url
  }

  createForm: FormGroup = this.formBuilder.group({
    empresa: ['', [Validators.required]],
    nome: ['', [Validators.required]],
    telefone: ['', [Validators.pattern('[- +()0-9]{11}')]],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  errorMessage = '';

  createCliente() {
    if (this.createForm?.invalid) return;
    this.store
      .select(DadosSessaoState)
      .pipe(
        take(1),
        switchMap((e: IDadosSessaoState) => {
          return this.service
            .criar(e.id, this.createForm.value)
            .pipe(take(1));
        })
      )
      .subscribe({
        next: (e) => {
          this.store.dispatch(new SetCliente(e as IDadosClientesState));
          console.log('Cliente Salvo');
          setTimeout(() => {
            this.modalRef.close();
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => this.router.navigate([this.href]));
          }, 200);
        },
        error: (err) => console.log(err),
      });
  }

  cancel() {
    this.createForm.reset();
    console.log(this.createForm.value);
    setTimeout(() => {
      this.modalRef.close();
    }, 200);
  }
}
