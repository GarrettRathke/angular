import { TestBed } from '@angular/core/testing';

import { CoffeeBackendService } from './coffee-backend.service';

describe('CoffeeBackendService', () => {
  let service: CoffeeBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
