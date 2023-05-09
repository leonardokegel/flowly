import { Router } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { FormBuilder } from '@angular/forms';
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

describe('SignUpComponent', () => {
  let component: SignUpComponent;

  beforeEach(() => {
    component = new SignUpComponent(
      routerStube,
      formBulderStub,
      loginServiceStub
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
