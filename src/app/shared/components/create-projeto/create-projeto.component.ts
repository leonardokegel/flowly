import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';

@Component({
  selector: 'app-create-projeto',
  templateUrl: './create-projeto.component.html',
  styleUrls: ['./create-projeto.component.scss']
})
export class CreateProjetoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private modalRef: ModalRef,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    @Inject(MODAL_DATA) public data: any
  ) {}

  createForm: FormGroup = this.formBuilder.group({
    titulo: ['', [Validators.required]],
    status: ['', [Validators.required]],
    cliente: ['', [Validators.required]],
    data_inicio: ['', [Validators.required]],
    valor: ['', [Validators.required]],
  });

  errorMessage = '';

  createCliente() {
    if (this.createForm?.invalid) return;
    console.log(this.createForm.value);
    setTimeout(() => {
      this.modalRef.close();
    }, 200);
  }

  cancel() {
    this.createForm.reset();
    setTimeout(() => {
      this.modalRef.close();
    }, 200);
  }
}
