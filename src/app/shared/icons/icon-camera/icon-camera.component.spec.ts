import { IconCameraComponent } from './icon-camera.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconCameraComponent;
  let fixture: ComponentFixture<IconCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconCameraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
