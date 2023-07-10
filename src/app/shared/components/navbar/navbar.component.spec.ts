import { Router } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { Store } from '@ngxs/store';

const routerStub = {
  url: '',
  navigate: jest.fn(),
  navigateByUrl: jest.fn(),
} as unknown as Router;

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;

describe('NavbarComponent', () => {
  const component = new NavbarComponent(routerStub, storeStub);

  it('NavbarComponent', () => {
    expect(component).toBeTruthy();
  });

});

