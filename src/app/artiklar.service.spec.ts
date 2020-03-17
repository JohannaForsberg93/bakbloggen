import { TestBed } from '@angular/core/testing';

import { ArtiklarService } from './artiklar.service';

describe('ArtiklarService', () => {
  let service: ArtiklarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtiklarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
