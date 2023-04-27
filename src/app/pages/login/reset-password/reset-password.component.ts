import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  resetPasswordForm!: FormGroup;

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      resetEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
  }

  loginUser() {
    console.log('user');
  }
}
