import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { Observable, of, switchMap, take } from 'rxjs';
import { ContratosService } from 'src/app/pages/dashboard/contratos/contratos.service';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';

@Component({
  selector: 'app-create-contrato',
  templateUrl: './create-contrato.component.html',
})
export class CreateContratoComponent {
  href = '';

  constructor(
    private formBuilder: FormBuilder,
    private modalRef: ModalRef,
    private service: ContratosService,
    private router: Router,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    @Inject(MODAL_DATA) public data: any
  ) {
    this.clientesFormatado$ = this.clientes$?.pipe(
      switchMap((e: any) => {
        const options = {};
        e.map((el: { id: any; nome: any }) => {
          Object.assign(options, { [el.id]: el.nome });
        });

        return of(options);
      })
    );
    this.href = this.router.url
  }

  @Select(DadosClienteState)
  clientes$: Observable<any> | undefined;

  clientesFormatado$: Observable<any> | undefined;

  isLoading = false;

  createForm: FormGroup = this.formBuilder.group({
    cliente: ['', Validators.compose([Validators.required])],
    titulo: ['', Validators.compose([Validators.required])],
  });

  errorMessage = '';

  createProposta() {
    if (this.createForm?.invalid) return;

    const { titulo, cliente } = this.createForm.value;

    this.isLoading = true;

    this.service
      .criar(titulo, cliente)
      .pipe(take(1))
      .subscribe({
        next: () => {
          setTimeout(() => {
            this.modalRef.close();
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => this.router.navigate([this.href]));
          }, 50);
        },
        error: (err: any) => (this.errorMessage = err.mensagem),
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
