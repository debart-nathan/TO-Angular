import { TestBed } from '@angular/core/testing';

import { UtilityFuncService } from './utility-func.service';

describe('UtilityFuncService', () => {
  let service: UtilityFuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityFuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
