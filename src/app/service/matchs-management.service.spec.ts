import { TestBed } from '@angular/core/testing';

import { MatchsManagementService } from './matchs-management.service';

describe('MatchsManagementService', () => {
  let service: MatchsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
