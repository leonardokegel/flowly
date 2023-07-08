import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjetoComponent } from './edit-projeto.component';

describe('EditProjetoComponent', () => {
  let component: EditProjetoComponent;
  let fixture: ComponentFixture<EditProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
