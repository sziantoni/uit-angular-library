import { TestBed } from '@angular/core/testing';

import { UitRoutingAnimationLibService } from './uit-routing-animation-lib.service';

describe('UitRoutingAnimationLibService', () => {
  let service: UitRoutingAnimationLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UitRoutingAnimationLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
