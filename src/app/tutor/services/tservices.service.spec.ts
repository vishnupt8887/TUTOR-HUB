import { TestBed } from '@angular/core/testing';

import { TservicesService } from './tservices.service';

describe('TservicesService', () => {
  let service: TservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
