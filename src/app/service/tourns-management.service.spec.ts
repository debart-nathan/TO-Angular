import { TestBed } from '@angular/core/testing';

import { TournsManagementService } from './tourns-management.service';

describe('TournsManagementService', () => {
  let service: TournsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
