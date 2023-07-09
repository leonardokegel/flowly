import { ClientesService } from './../../../pages/dashboard/clientes/clientes.service';
import { CreateClienteComponent } from './create-cliente.component';
import { ModalRef } from '@shared/modal/modal.ref';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

const modalRefStub = {
  close: jest.fn(),
} as unknown as ModalRef;

const data = {};

const formBuilderStub = {
  group: jest.fn(),
} as unknown as FormBuilder;

const clientesServiceStub = {
  criar: jest.fn(),
} as unknown as ClientesService;

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;

const routerStub = {
  url: '',
  navigate: jest.fn(),
  navigateByUrl: jest.fn(),
} as unknown as Router;

describe('CreateClienteComponent', () => {
  let component: CreateClienteComponent;

  beforeEach(async () => {
    component = new CreateClienteComponent(
      formBuilderStub,
      modalRefStub,
      clientesServiceStub,
      storeStub,
      routerStub,
      data
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
