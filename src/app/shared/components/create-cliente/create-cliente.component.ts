import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss']
})
export class CreateClienteComponent {

  constructor( 
    private formBuilder: FormBuilder,
    private modalRef: ModalRef, 
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    @Inject(MODAL_DATA) public data: any
    ) {}

  createForm: FormGroup = this.formBuilder.group({
    empresa: ['', [Validators.required]],
    nome: ['', [Validators.required]],
    telefone: ['', [Validators.pattern('[- +()0-9]{11}')]],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  errorMessage = '';

  createCliente() {
    if (this.createForm?.invalid) return;
    console.log(this.createForm.value);
    setTimeout(() => {
      this.modalRef.close();
    }, 500);
  }

  cancel() {
    this.createForm.reset();
    console.log(this.createForm.value);
    setTimeout(() => {
      this.modalRef.close();
    }, 200);
  }
}