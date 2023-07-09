import { ModalRef } from '@shared/modal/modal.ref';
import { EditClienteComponent } from './edit-cliente.component';
import { FormBuilder } from '@angular/forms';

const modalRefStub = {
  close: jest.fn(),
} as unknown as ModalRef;

const data = {
  modalType: '',
  cliente: {
    empresa: '',
    nome: '',
    email: '',
  },
};

const formBuilderStub = {
  group: jest.fn(),
} as unknown as FormBuilder;

describe('EditClienteComponent', () => {
  let component: EditClienteComponent;

  beforeEach(async () => {
    component = new EditClienteComponent(formBuilderStub, modalRefStub, data);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
