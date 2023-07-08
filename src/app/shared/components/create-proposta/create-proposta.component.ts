import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { Observable, of, switchMap } from 'rxjs';
// import { take } from 'rxjs';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';

// import { PropostasService } from './../../../pages/dashboard/propostas/propostas.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proposta',
  templateUrl: './create-proposta.component.html',
  styleUrls: ['./create-proposta.component.scss'],
})
export class CreatePropostaComponent {
  constructor(
    private formBuilder: FormBuilder,
    public modalRef: ModalRef,
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

    // this.href = this.router.url
  }

  @Select(DadosClienteState)
  clientes$: Observable<any> | undefined;

  clientesFormatado$: Observable<any> | undefined;

  // isLoading = false;

  createForm: FormGroup = this.formBuilder.group({
    cliente: ['', Validators.compose([Validators.required])],
    titulo: ['', Validators.compose([Validators.required])],
  });



  cancel() {
    this.createForm.reset();
    setTimeout(() => {
      this.modalRef.close([false]);
    }, 200);
  }

  continuar() {
    setTimeout(() => {
      this.modalRef.close([true, this.createForm.value]);
    }, 200);
  }
}
