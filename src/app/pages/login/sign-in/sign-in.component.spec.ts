import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    const authServiceStub = () => ({
      signupUser: (_email: string, _password: string) => {},
      loginUser: (_user: any) => {},
    });

    const routerServiceStub = () => ({
      navigate: () => {},
    });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SignInComponent],
      providers: [
        { provide: AuthService, useFactory: authServiceStub },
        { provide: Router, useFactory: routerServiceStub },
      ],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
