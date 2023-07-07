import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';

@Component({
  selector: 'app-edit-proposta',
  templateUrl: './edit-proposta.component.html',
})
export class EditPropostaComponent {
  constructor(
    private formBuilder: FormBuilder,
    public modalRef: ModalRef,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    @Inject(MODAL_DATA) public data: IDataProposta
  ) {}

  createForm: FormGroup = this.formBuilder.group({
    titulo: [
      this.data.proposta.titulo,
      Validators.compose([Validators.required]),
    ],
    status: [
      this.data.proposta.status,
      Validators.compose([Validators.required]),
    ],
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

export interface IDataProposta {
  modalType: string;
  proposta: {
    id: number;
    titulo: string;
    status: number;
    cliente: {
      id: number;
      empresa: string;
      nome: string;
    };
  };
}
