import { IconCoffeeComponent } from './icon-coffee.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconCoffeeComponent;
  let fixture: ComponentFixture<IconCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconCoffeeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
