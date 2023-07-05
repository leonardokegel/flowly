import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjetoComponent } from './create-projeto.component';

describe('CreateProjetoComponent', () => {
  let component: CreateProjetoComponent;
  let fixture: ComponentFixture<CreateProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
