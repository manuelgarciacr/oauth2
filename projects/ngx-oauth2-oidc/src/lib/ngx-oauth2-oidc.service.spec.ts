import { TestBed } from '@angular/core/testing';

import { NgxOauth2OidcService } from './ngx-oauth2-oidc.service';

describe('NgxOauth2OidcService', () => {
  let service: NgxOauth2OidcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOauth2OidcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
