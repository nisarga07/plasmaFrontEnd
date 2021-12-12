import { TestBed } from '@angular/core/testing';

import { DonarAcceptorService } from './donar-acceptor.service';

describe('DonarAcceptorService', () => {
  let service: DonarAcceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonarAcceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
