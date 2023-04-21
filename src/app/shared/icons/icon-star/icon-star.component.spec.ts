import { IconStarComponent } from './icon-star.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconStarComponent;
  let fixture: ComponentFixture<IconStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconStarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
