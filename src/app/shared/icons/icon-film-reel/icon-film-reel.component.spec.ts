import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFilmReelComponent } from './icon-filme-reel.component';

describe('IconFilmReelComponent', () => {
  let component: IconFilmReelComponent;
  let fixture: ComponentFixture<IconFilmReelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconFilmReelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconFilmReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
