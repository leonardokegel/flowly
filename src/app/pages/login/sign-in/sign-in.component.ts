import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service.ts.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService
  ) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', [Validators.required]],
  });

  errorMessage!: string;

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    this.service
      .signIn(this.loginForm.value)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => (this.errorMessage = err.mensagem),
      });
  }
}
