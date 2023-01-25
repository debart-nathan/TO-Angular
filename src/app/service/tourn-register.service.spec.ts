import { TestBed } from '@angular/core/testing';

import { TournRegisterService } from './tourn-register.service';

describe('TournRegisterService', () => {
  let service: TournRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
