import { ModalService } from '@shared/modal/modal.service';
import { HomeComponent } from './home.component';
import { PropostasService } from '../propostas/propostas.service';
import { ContratosService } from '../contratos/contratos.service';
import { ProjetosService } from '../projetos/projetos.service';
import { Store } from '@ngxs/store';

const modalServiceStub = {
  open: jest.fn(),
  openNotification: jest.fn(),
} as unknown as ModalService;

const serviceProposalStub = {
  getPropostas: jest.fn(),
} as unknown as PropostasService;

const serviceContractStub = {
  getContratos: jest.fn(),
} as unknown as ContratosService;

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;

const serviceProjectStub = {
  getProjetos: jest.fn(),
} as unknown as ProjetosService;

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(async () => {
    component = new HomeComponent(
      modalServiceStub,
      serviceProposalStub,
      serviceContractStub,
      storeStub,
      serviceProjectStub
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
