import { IconArrowRightComponent } from './icon-trash.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconArrowRightComponent;
  let fixture: ComponentFixture<IconArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconArrowRightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
