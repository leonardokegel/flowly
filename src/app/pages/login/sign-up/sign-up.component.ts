import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  signUpForm: FormGroup = this.formBuilder.group({
    displayName: ['', [Validators.required]],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', [Validators.required]],
  });

  errorMessage = '';

  signUp() {
    if (this.signUpForm?.invalid)
      // if there's an error in the form, don't submit it
      return;

    console.log('conta criada e logado');
    this.router.navigate(['/dashboard']);
  }
}
