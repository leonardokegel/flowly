import { ModalRef } from '@shared/modal/modal.ref';
import { EditContratosComponent } from './edit-contratos.component';
import { FormBuilder } from '@angular/forms';

const modalRefStub = {
  close: jest.fn(),
} as unknown as ModalRef;

const data = {
  modalType: '',
  contrato: {
    id: 0,
    titulo: '',
    status: 0,
    cliente: {
      id: 0,
      empresa: '',
      nome: '',
    },
  },
};

const formBuilderStub = {
  group: jest.fn(),
} as unknown as FormBuilder;

describe('EditContratosComponent', () => {
  let component: EditContratosComponent;

  beforeEach(async () => {
    component = new EditContratosComponent(formBuilderStub, modalRefStub, data);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
