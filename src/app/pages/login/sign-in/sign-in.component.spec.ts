import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { SignInComponent } from './sign-in.component';
import { LoginService } from '../login.service.ts.service';

const routerStube = {
  navigate: jest.fn(),
} as unknown as Router;

const formBulderStub = {
  group: jest.fn(),
} as unknown as FormBuilder;

const loginServiceStub = {
  signIn: jest.fn(),
} as unknown as LoginService;
describe('SignInComponent', () => {
  let component: SignInComponent;

  beforeEach(() => {
    component = new SignInComponent(
      routerStube,
      formBulderStub,
      loginServiceStub
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
