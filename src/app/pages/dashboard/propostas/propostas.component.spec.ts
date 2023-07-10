import { ModalService } from '@shared/modal/modal.service';
import { PropostasComponent } from './propostas.component';
import { Store } from '@ngxs/store';
import { PropostasService } from './propostas.service';
// import { Router } from '@angular/router';

const modalServiceStub = {
  open: jest.fn(),
  openNotification: jest.fn(),
} as unknown as ModalService;

const propostasServiceStub = {
  getPropostas: jest.fn(),
  criar: jest.fn(),
  deletar: jest.fn(),
  editar: jest.fn()
} as unknown as PropostasService;

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;

// const routerStub = {
//   url: '',
//   navigate: jest.fn(),
//   navigateByUrl: jest.fn(),
// } as unknown as Router;

describe('PropostasComponent', () => {
  let component: PropostasComponent;

  beforeEach(async () => {
    component = new PropostasComponent(modalServiceStub, propostasServiceStub, storeStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
