import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableListComponent } from './table-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ TableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});