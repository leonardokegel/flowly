import { DadosClienteState } from './../../../store/dados-clientes/dados-clientes.state';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-create-contrato',
  templateUrl: './create-contrato.component.html',
})
export class CreateContratoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private modalRef: ModalRef,
    private store: Store,
    @Inject(MODAL_DATA) public data: any
  ) { }

  clientesFormatado$: Observable<any> | undefined;

  isLoading = false;

  createForm: FormGroup = this.formBuilder.group({
    cliente: ['', Validators.compose([Validators.required])],
    titulo: ['', Validators.compose([Validators.required])],
  });

  errorMessage = '';

  ngOnInit(): void {
    this.clientesFormatado$ = this.store.select(DadosClienteState).pipe(
      switchMap((e: any) => {
        const options = {};
        e.map((el: { id: any; nome: any }) => {
          Object.assign(options, { [el.id]: el.nome });
        });
        return of(options);
      })
    );
  }

  cancel() {
    this.createForm.reset();
    setTimeout(() => {
      this.modalRef.close();
    }, 200);
  }

  continuar() {
    setTimeout(() => {
      this.modalRef.close([true, this.createForm.value]);
    }, 200);
  }
}
