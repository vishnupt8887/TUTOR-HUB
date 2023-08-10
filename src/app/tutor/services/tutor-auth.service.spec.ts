import { TestBed } from '@angular/core/testing';

import { TutorAuthService } from './tutor-auth.service';

describe('TutorAuthService', () => {
  let service: TutorAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
