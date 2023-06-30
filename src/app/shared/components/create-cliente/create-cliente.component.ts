import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss']
})
export class CreateClienteComponent {

  constructor( private formBuilder: FormBuilder ) {}

  createForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required]],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  errorMessage = '';

  createCliente() {
    if (this.createForm?.invalid) return;

    console.log(this.createForm.value);
  }
}
