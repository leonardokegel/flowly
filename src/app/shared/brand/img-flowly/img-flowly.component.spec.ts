import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFlowlyComponent } from './img-flowly.component';

describe('ImgFlowlyComponent', () => {
  let component: ImgFlowlyComponent;
  let fixture: ComponentFixture<ImgFlowlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgFlowlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgFlowlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
