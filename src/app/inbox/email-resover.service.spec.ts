import { TestBed } from '@angular/core/testing';

import { EmailResoverService } from './email-resolver.service';

describe('EmailResoverService', () => {
  let service: EmailResoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailResoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
