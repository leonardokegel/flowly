import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private service: PropostasService
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

  loginUser() {
    if (this.propostaForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.service.postPropostas(this.propostaForm.value, '').pipe(take(1));
    // .subscribe({
    //   next: (responseApi) => {
    //     console.log(responseApi);
    //     this.store.dispatch(new ObterDadosSessaoAction(responseApi));

    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (err) => (this.errorMessage = err.mensagem),
    // });
  }
}
