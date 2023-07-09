import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { take } from 'rxjs';

import { LoginService } from '../login.service.ts.service';
import { ObterDadosSessaoAction } from './../../../store/dados-sessao/dados-sessao.action';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService,
    private store: Store
  ) {}

  isLoading = false;

  loginForm: FormGroup = this.formBuilder.group({
    email: [
      'pedro@gmail.com',
      Validators.compose([Validators.required, Validators.email]),
    ],
    senha: ['123456', [Validators.required]],
  });

  errorMessage!: string;

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.service
      .signIn(this.loginForm.value)
      .pipe(take(1))
      .subscribe({
        next: (responseApi) => {
          this.store.dispatch(new ObterDadosSessaoAction(responseApi));

          this.router.navigate(['/dashboard']);
        },
        error: (err) => (this.errorMessage = err.mensagem),
      });
  }
}
