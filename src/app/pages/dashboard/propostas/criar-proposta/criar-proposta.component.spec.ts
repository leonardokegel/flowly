import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPropostaComponent } from './criar-proposta.component';

describe('CriarPropostaComponent', () => {
  let component: CriarPropostaComponent;
  let fixture: ComponentFixture<CriarPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPropostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
