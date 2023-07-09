import { Store } from '@ngxs/store';
import { ClientesComponent } from './clientes.component';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';
import { ModalService } from '@shared/modal/modal.service';

const modalServiceStub = {
  open: jest.fn(),
  openNotification: jest.fn(),
} as unknown as ModalService;

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;

const serviceStub = {
  getClientes: jest.fn(),
  deletar: jest.fn(),
  editar: jest.fn(),
} as unknown as ClientesService;

const routerStub = {
  url: '',
  navigate: jest.fn(),
  navigateByUrl: jest.fn(),
} as unknown as Router;

describe('ClientesComponent', () => {
  let component: ClientesComponent;

  beforeEach(async () => {
    component = new ClientesComponent(
      modalServiceStub,
      storeStub,
      serviceStub,
      routerStub
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
