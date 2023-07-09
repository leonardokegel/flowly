import { DadosClienteState } from './../../../store/dados-clientes/dados-clientes.state';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { switchMap, of, Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-create-projeto',
  templateUrl: './create-projeto.component.html',
  styleUrls: ['./create-projeto.component.scss']
})
export class CreateProjetoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private modalRef: ModalRef,
    private store: Store,
    @Inject(MODAL_DATA) public data: any
  ) { }

  clientesFormatado$: Observable<any> | undefined;

  createForm: FormGroup = this.formBuilder.group({
    cliente: ['', [Validators.required]],
    titulo: ['', [Validators.required]],
    status: ['', [Validators.required]],
    data_inicio: ['', [Validators.required]],
    valor: ['', [Validators.required]],
    descricao: ['', Validators.required]
  });

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
      this.modalRef.close([false]);
    }, 200);
  }

  continuar() {
    setTimeout(() => {
      this.modalRef.close([true, this.createForm.value]);
    }, 200);
  }
}
