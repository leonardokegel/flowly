import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { SignInComponent } from './sign-in.component';
import { LoginService } from '../login.service.ts.service';
import { Store } from '@ngxs/store';

const routerStube = {
  navigate: jest.fn(),
} as unknown as Router;

const formBulderStub = {
  group: jest.fn(),
} as unknown as FormBuilder;

const loginServiceStub = {
  signIn: jest.fn(),
} as unknown as LoginService;

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;
describe('SignInComponent', () => {
  let component: SignInComponent;

  beforeEach(() => {
    component = new SignInComponent(
      routerStube,
      formBulderStub,
      loginServiceStub,
      storeStub
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
