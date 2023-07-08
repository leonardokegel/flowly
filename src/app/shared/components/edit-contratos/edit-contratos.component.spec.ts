import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContratosComponent } from './edit-contratos.component';

describe('EditContratosComponent', () => {
  let component: EditContratosComponent;
  let fixture: ComponentFixture<EditContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContratosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
