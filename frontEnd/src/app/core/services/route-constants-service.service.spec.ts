import { TestBed } from '@angular/core/testing';

import { RouteConstantsServiceService } from './route-constants-service.service';

describe('RouteConstantsServiceService', () => {
  let service: RouteConstantsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteConstantsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
