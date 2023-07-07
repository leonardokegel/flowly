/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { switchMap, of, Observable } from 'rxjs';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';

@Component({
  selector: 'app-edit-proposta',
  templateUrl: './edit-proposta.component.html',
  styleUrls: ['./edit-proposta.component.scss']
})
export class EditPropostaComponent {
  constructor(
    private formBuilder: FormBuilder,
    public modalRef: ModalRef,
    // Temos que dar um jeito no typo do modal
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

  editForm: FormGroup = this.formBuilder.group({
    cliente: [this.data.content.clienteId, Validators.compose([Validators.required])],
    titulo: [this.data.content.titulo, Validators.compose([Validators.required])],
  });

  cancel() {
    this.editForm.reset();
    setTimeout(() => {
      this.modalRef.close([false]);
    }, 200);
  }

  continuar() {
    setTimeout(() => {
      this.modalRef.close([true, this.editForm.value]);
    }, 200);
  }

}
