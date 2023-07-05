import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { Observable, of, switchMap } from 'rxjs';
// import { take } from 'rxjs';
import { DadosClienteState } from 'src/app/store/dados-clientes/dados-clientes.state';

// import { PropostasService } from './../../../pages/dashboard/propostas/propostas.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proposta',
  templateUrl: './create-proposta.component.html',
  styleUrls: ['./create-proposta.component.scss'],
})
export class CreatePropostaComponent {
  // href = '';
  constructor(
    private formBuilder: FormBuilder,
    public modalRef: ModalRef,
    // private service: PropostasService,
    // private router: Router,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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

    // this.href = this.router.url
  }

  @Select(DadosClienteState)
  clientes$: Observable<any> | undefined;

  clientesFormatado$: Observable<any> | undefined;

  // isLoading = false;

  createForm: FormGroup = this.formBuilder.group({
    cliente: ['', Validators.compose([Validators.required])],
    titulo: ['', Validators.compose([Validators.required])],
  });

  // errorMessage = '';

  // createProposta() {
  //   if (this.createForm?.invalid) return;

  //   const { titulo, cliente } = this.createForm.value;

  //   this.isLoading = true;

  //   this.service
  //     .criar(titulo, cliente)
  //     .pipe(take(1))
  //     .subscribe({
  //       next: () => {
  //         setTimeout(() => {
  //           this.modalRef.close();
  //           this.router
  //             .navigateByUrl('/', { skipLocationChange: true })
  //             .then(() => this.router.navigate([this.href]));
  //         }, 50);
  //       },
  //       error: (err) => (this.errorMessage = err.mensagem),
  //     });
  // }

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
