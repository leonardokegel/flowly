// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ResetPasswordComponent } from './reset-password.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResetPasswordComponent } from './reset-password.component';


// describe('ResetPasswordComponent', () => {
//   let component: ResetPasswordComponent;
//   let fixture: ComponentFixture<ResetPasswordComponent>;

//     beforeEach(() => {
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [ResetPasswordComponent],
//       imports: [ReactiveFormsModule, FormsModule],
//       providers: [ FormBuilder ]
//     }).compileComponents();

//   // const formBuilder: FormBuilder;

//   // const component: ResetPasswordComponent = new ResetPasswordComponent();

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ResetPasswordComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
