import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service.ts.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService
  ) {}

  signUpForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required]],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', [Validators.required]],
  });

  errorMessage = '';

  signUp() {
    if (this.signUpForm?.invalid) return;

    this.service.signUp(this.signUpForm.value).pipe(take(1)).subscribe({
    next: () => this.router.navigate(['login']),
    error: (err) => {
      if(err.statusCode == 422 || err.statusCode == 500) {
        this.errorMessage = err.mensagem;
      }}
    });
  }
}
