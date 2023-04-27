import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', [Validators.required]],
  });

  errorMessage!: string;

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    console.log('logado');
    this.router.navigate(['/dashboard']);
  }
}
