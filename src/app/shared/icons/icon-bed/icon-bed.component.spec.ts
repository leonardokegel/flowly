import { IconBedComponent } from './icon-bed.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconBedComponent;
  let fixture: ComponentFixture<IconBedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconBedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
