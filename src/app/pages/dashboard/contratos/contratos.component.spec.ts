import { ModalService } from '@shared/modal/modal.service';
import { ContratosComponent } from './contratos.component';
import { Store } from '@ngxs/store';
import { ContratosService } from './contratos.service';
// import { Router } from '@angular/router';

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
} as unknown as ContratosService;

// const routerStub = {
//   url: '',
//   navigate: jest.fn(),
//   navigateByUrl: jest.fn(),
// } as unknown as Router;

describe('ContratosComponent', () => {
  let component: ContratosComponent;

  beforeEach(async () => {
    component = new ContratosComponent(modalServiceStub, serviceStub, storeStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
