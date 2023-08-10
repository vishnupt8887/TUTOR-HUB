import { TestBed } from '@angular/core/testing';

import { AservicesService } from './aservices.service';

describe('AservicesService', () => {
  let service: AservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
