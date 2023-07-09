import { ModalRef } from '@shared/modal/modal.ref';
import { CreatePropostaComponent } from './create-proposta.component';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';

const modalRefStub = {
  close: jest.fn(),
} as unknown as ModalRef;

const data = {};

const formBuilderStub = {
  group: jest.fn(),
} as unknown as FormBuilder;

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
  pipe: jest.fn()
} as unknown as Store;

describe('CreatePropostaComponent', () => {
  let component: CreatePropostaComponent;

  beforeEach(async () => {
    component = new CreatePropostaComponent(formBuilderStub, modalRefStub, storeStub, data)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
