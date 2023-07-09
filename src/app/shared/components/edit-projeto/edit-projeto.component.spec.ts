import { ModalRef } from '@shared/modal/modal.ref';
import { EditProjetoComponent } from './edit-projeto.component';
import { FormBuilder } from '@angular/forms';

const modalRefStub = {
  close: jest.fn(),
} as unknown as ModalRef;

const data = {
  modalType: '',
  projeto: {
    id: 0,
    titulo: '',
    status: 0,
    data_inicio: '',
    valor: '',
    descricao: '',
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

describe('EditProjetoComponent', () => {
  let component: EditProjetoComponent;

  beforeEach(async () => {
    component = new EditProjetoComponent(formBuilderStub, modalRefStub, data);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
