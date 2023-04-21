import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWarningCircleComponent } from './icon-warning-circle.component';

describe('IconWarningCircleComponent', () => {
  let component: IconWarningCircleComponent;
  let fixture: ComponentFixture<IconWarningCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconWarningCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconWarningCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
