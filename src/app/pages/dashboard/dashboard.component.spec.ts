import { Store } from '@ngxs/store';
import { DashboardComponent } from './dashboard.component';
import { ClientesService } from './clientes/clientes.service';

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;

const clientesServiceStub = {
  getClientes: jest.fn()
} as unknown as ClientesService

describe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(async () => {
    component = new DashboardComponent(storeStub, clientesServiceStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
