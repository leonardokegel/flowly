import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { ModalRef } from './modal.ref';
import { MODAL_DATA } from './modal-tokens';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [
        { provide: ModalRef, useValue: {} },
        {
          provide: MODAL_DATA, useValue: {
            data:
            {
              title: 'Modal',
              subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              modalType: 'TEST_MODAL'
            },
            hasBackdropClick: true
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
