import { IDataModal, NotificationComponent } from './notification.component';
import { ModalRef } from '@shared/modal/modal.ref';

describe('NotificationComponent', () => {

  const modalRefStub = {
    close: jest.fn(),
  } as unknown as ModalRef

  const data = {
    message: '',
    color: 'success'
  } as unknown as IDataModal

  let component: NotificationComponent;

  beforeEach(async () => {
    component = new NotificationComponent(modalRefStub, data)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
