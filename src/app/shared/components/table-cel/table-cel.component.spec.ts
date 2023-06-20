import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCelComponent } from './table-cel.component';

describe('TableCelComponent', () => {
  let component: TableCelComponent;
  let fixture: ComponentFixture<TableCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCelComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCelComponent);
    component = fixture.componentInstance;

    // // Set up a mock item input to the component for testing
    // component.item = [0, [{ status: 3 }, { status: 2 }, { status: 5 }]];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
