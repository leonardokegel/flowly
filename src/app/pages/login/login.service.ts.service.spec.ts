
import { LoginService} from './login.service.ts.service';
import { HttpClient } from '@angular/common/http';

const httpClientStub = {
  post: jest.fn()
} as unknown as HttpClient

describe('LoginServiceTsService', () => {
  const service: LoginService = new LoginService(httpClientStub);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
