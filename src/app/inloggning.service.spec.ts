import { TestBed } from '@angular/core/testing';

import { InloggningService } from './inloggning.service';

describe('InloggningService', () => {
  let service: InloggningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InloggningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
