import { ModalService } from '@shared/modal/modal.service';
import { ProjetosComponent } from './projetos.component';
import { ProjetosService } from './projetos.service';
import { Store } from '@ngxs/store';

const modalServiceStub = {
  open: jest.fn(),
  openNotification: jest.fn(),
} as unknown as ModalService;

const serviceProjectStub = {
  getProjetos: jest.fn(),
} as unknown as ProjetosService;

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;


describe('ProjetosComponent', () => {
  let component: ProjetosComponent;

  beforeEach(async () => {
    component = new ProjetosComponent(modalServiceStub, serviceProjectStub, storeStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
