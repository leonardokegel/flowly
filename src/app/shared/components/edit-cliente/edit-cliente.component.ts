import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent {

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: ModalRef,
    @Inject(MODAL_DATA) public data: IDataCliente
  ) {}

  createForm: FormGroup = this.formBuilder.group({
    empresa: [
      this.data.cliente.empresa,
      Validators.compose([Validators.required]),
    ],
    nome: [
      this.data.cliente.nome,
      Validators.compose([Validators.required]),
    ],
    email: [
      this.data.cliente.email,
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

export interface IDataCliente {
  modalType: string;
  cliente: {
    empresa: string;
    nome: string;
    email: string;
  };

}
