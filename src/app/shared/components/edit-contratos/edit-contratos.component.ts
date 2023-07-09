import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';

@Component({
  selector: 'app-edit-contratos',
  templateUrl: './edit-contratos.component.html',
  styleUrls: ['./edit-contratos.component.scss']
})
export class EditContratosComponent {

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: ModalRef,
    @Inject(MODAL_DATA) public data: IDataContrato
  ) {}

  createForm: FormGroup = this.formBuilder.group({
    titulo: [
      this.data.contrato.titulo,
      Validators.compose([Validators.required]),
    ],
    status: [
      this.data.contrato.status,
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

export interface IDataContrato {
  modalType: string;
  contrato: {
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

