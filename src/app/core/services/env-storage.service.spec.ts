import { TestBed } from '@angular/core/testing';

import { EnvStorageService } from './env-storage.service';

describe('EnvStorageService', () => {
  let service: EnvStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
