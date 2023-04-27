import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class LoginModule {}
