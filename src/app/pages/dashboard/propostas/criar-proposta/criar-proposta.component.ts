import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable, of, switchMap, take } from 'rxjs';

import { PropostasService } from '../propostas.service';
import { DadosClienteState } from './../../../../store/dados-clientes/dados-clientes.state';

@Component({
  selector: 'app-criar-proposta',
  templateUrl: './criar-proposta.component.html',
  styleUrls: ['./criar-proposta.component.scss'],
})
export class CriarPropostaComponent {
  constructor(
    private formBuilder: FormBuilder,
    private service: PropostasService,
    private router: Router
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

  isLoading = false;

  propostaForm: FormGroup = this.formBuilder.group({
    cliente: ['', Validators.compose([Validators.required])],
    titulo: ['', Validators.compose([Validators.required])],
  });

  errorMessage = '';

  criaProposta() {
    if (this.propostaForm.invalid) {
      return;
    }

    const { titulo, cliente } = this.propostaForm.value;

    console.log({ titulo, cliente });

    this.isLoading = true;

    this.service
      .postPropostas(titulo, cliente)
      .pipe(take(1))
      .subscribe({
        next: (responseApi) => {
          console.log(responseApi);
          this.router.navigate(['/dashboard/propostas/']);
        },
        error: (err) => (this.errorMessage = err.mensagem),
      });
  }
}
