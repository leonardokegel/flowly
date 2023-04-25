import { IconSquareFourComponent } from './icon-squares-four.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconSquareFourComponent;
  let fixture: ComponentFixture<IconSquareFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconSquareFourComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconSquareFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
