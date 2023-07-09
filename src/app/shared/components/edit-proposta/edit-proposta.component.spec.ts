import { ModalRef } from '@shared/modal/modal.ref';
import { EditPropostaComponent } from './edit-proposta.component';
import { FormBuilder } from '@angular/forms';

const modalRefStub = {
  close: jest.fn(),
} as unknown as ModalRef;

const data = {
  modalType: '',
  proposta: {
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

describe('EditPropostaComponent', () => {
  let component: EditPropostaComponent;

  beforeEach(async () => {
    component = new EditPropostaComponent(formBuilderStub, modalRefStub, data);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
