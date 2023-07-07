import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPropostaComponent } from './edit-proposta.component';

describe('EditPropostaComponent', () => {
  let component: EditPropostaComponent;
  let fixture: ComponentFixture<EditPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPropostaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
