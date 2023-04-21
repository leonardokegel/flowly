import { IconMapPinLineComponent } from './icon-map-pin-line.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconMapPinLineComponent;
  let fixture: ComponentFixture<IconMapPinLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconMapPinLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconMapPinLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
