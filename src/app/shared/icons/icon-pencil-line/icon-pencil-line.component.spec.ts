import { IconPencilLineComponent } from './icon-pencil-line.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconPencilLineComponent;
  let fixture: ComponentFixture<IconPencilLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconPencilLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconPencilLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
