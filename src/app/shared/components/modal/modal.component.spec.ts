import { ModalRef } from '@shared/modal/modal.ref';
import { ModalComponent } from './modal.component';

const modalRefStub = {
  close: jest.fn(),
} as unknown as ModalRef;

const data = {};

describe('ModalComponent', () => {
  let component: ModalComponent;

  beforeEach(async () => {
    component = new ModalComponent(modalRefStub, data);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
