import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { Observable, of, switchMap, take } from 'rxjs';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';

import { PropostasService } from './../../../pages/dashboard/propostas/propostas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proposta',
  templateUrl: './create-proposta.component.html',
  styleUrls: ['./create-proposta.component.scss'],
})
export class CreatePropostaComponent {
  constructor(
    private formBuilder: FormBuilder,
    private modalRef: ModalRef,
    private service: PropostasService,
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

    console.log({ titulo, cliente });

    this.isLoading = true;

    this.service
      .postPropostas(titulo, cliente)
      .pipe(take(1))
      .subscribe({
        next: (responseApi) => {
          console.log(responseApi);
          setTimeout(() => {
            this.modalRef.close();
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => this.router.navigate(['/dashboard/contratos']));
          }, 50);
        },
        error: (err) => (this.errorMessage = err.mensagem),
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
