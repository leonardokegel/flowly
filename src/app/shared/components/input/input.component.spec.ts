import { InputComponent } from './input.component';

describe('InputComponent', () => {
  const component: InputComponent = new InputComponent();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

// import { InputComponent } from './input.component';

// describe('InputComponent', () => {
//   let component: InputComponent;
//   let fixture: ComponentFixture<InputComponent>;

//   beforeEach(() => {
//     const formControlStub = () => ({
//       control: () => {},
//     });

//     TestBed.configureTestingModule({
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       declarations: [InputComponent],
//       imports: [ReactiveFormsModule, FormsModule],
//       providers: [{ provide: FormControl, useFactory: formControlStub }],
//     }).compileComponents();

//     fixture = TestBed.createComponent(InputComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
