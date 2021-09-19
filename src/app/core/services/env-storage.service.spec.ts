import { TestBed } from '@angular/core/testing';

import { EnvStorageService } from './env-storage.service';
import { Environment } from "../interfaces/environment";

describe('EnvStorageService', () => {
  let service: EnvStorageService;
  let envStub: Environment;

  beforeEach(() => {
    envStub = {
      apiKey: 'testApiKey',
      production: true,
    };
    EnvStorageService.setEnv(envStub);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getEnv', () => {
    it('should return environment', () => {
      const env = service.getEnv();

      expect(env).toEqual(envStub);
    });
  });
});
