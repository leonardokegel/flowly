import { IconPowerComponent } from './icon-power.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconPowerComponent;
  let fixture: ComponentFixture<IconPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconPowerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
