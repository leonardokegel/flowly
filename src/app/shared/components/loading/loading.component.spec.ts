import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;

  beforeEach(async () => {
    component = new LoadingComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
