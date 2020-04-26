import { TestBed } from '@angular/core/testing';

import { AutentiseringService } from './autentisering.service';

describe('AutentiseringService', () => {
  let service: AutentiseringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentiseringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
