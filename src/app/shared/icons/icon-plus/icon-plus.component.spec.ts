import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPlusComponent } from './icon-plus.component';

describe('MapPinLineComponent', () => {
  let component: IconPlusComponent;
  let fixture: ComponentFixture<IconPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconPlusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
