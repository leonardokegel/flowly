import { FormBuilder } from '@angular/forms';
import { CreateContratoComponent } from './create-contrato.component';
import { ModalRef } from '@shared/modal/modal.ref';
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

describe('CreateContratoComponent', () => {
  let component: CreateContratoComponent;

  beforeEach(async () => {

    component = new CreateContratoComponent(formBuilderStub, modalRefStub, storeStub, data);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
