import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';

@Component({
  selector: 'app-edit-projeto',
  templateUrl: './edit-projeto.component.html',
  styleUrls: ['./edit-projeto.component.scss']
})
export class EditProjetoComponent {

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: ModalRef,
    @Inject(MODAL_DATA) public data: IDataProjeto
  ) {}

  createForm: FormGroup = this.formBuilder.group({
    titulo: [
      this.data.projeto.titulo,
      Validators.compose([Validators.required]),
    ],
    status: [
      this.data.projeto.status,
      Validators.compose([Validators.required]),
    ],
    data_inicio: [
      this.data.projeto.data_inicio,
      Validators.compose([Validators.required]),
    ],
    valor: [
      this.data.projeto.valor,
      Validators.compose([Validators.required]),
    ],
    descricao: [
      this.data.projeto.descricao,
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

export interface IDataProjeto {
  modalType: string;
  projeto: {
    id: number;
    titulo: string;
    status: number;
    data_inicio: string;
    valor: string;
    descricao: string;
    cliente: {
      id: number;
      empresa: string;
      nome: string;
    };
  };
}
