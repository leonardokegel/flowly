import { IconChatComponent } from './icon-chat.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MapPinLineComponent', () => {
  let component: IconChatComponent;
  let fixture: ComponentFixture<IconChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
