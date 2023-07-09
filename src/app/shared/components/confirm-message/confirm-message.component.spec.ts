import { ConfirmMessageComponent } from './confirm-message.component';
import { ModalRef } from '@shared/modal/modal.ref';

const modalRefStub = {
  close: jest.fn(),
} as unknown as ModalRef

const data = {}
describe('ConfirmMessageComponent', () => {
  let component: ConfirmMessageComponent;

  beforeEach(async () => {
    component = new ConfirmMessageComponent(modalRefStub, data)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
