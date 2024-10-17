import { TestBed } from '@angular/core/testing';

import { UndecLoginSsoService } from './undec-login-sso.service';

describe('UndecLoginSsoService', () => {
  let service: UndecLoginSsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UndecLoginSsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
