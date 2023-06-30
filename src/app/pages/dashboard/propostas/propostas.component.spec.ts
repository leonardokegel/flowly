import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostasComponent } from './propostas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PropostasComponent', () => {
  let component: PropostasComponent;
  let fixture: ComponentFixture<PropostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ PropostasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
