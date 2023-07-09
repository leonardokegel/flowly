import { Store } from '@ngxs/store';
import { AppComponent } from './app.component';

const storeStub = {
  select: jest.fn(),
  dispatch: jest.fn(),
} as unknown as Store;

describe('AppComponent', () => {
  const component = new AppComponent(storeStub);

  it('App Component existe', () => {
    expect(component).toBeTruthy();
  });
});

