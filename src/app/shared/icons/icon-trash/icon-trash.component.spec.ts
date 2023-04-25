import { IconTrashComponent } from './icon-trash.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconTrashComponent;
  let fixture: ComponentFixture<IconTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconTrashComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
