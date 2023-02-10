import { TestBed } from '@angular/core/testing';

import { TournInscriptionService } from './tourn-inscription.service';

describe('TournInscriptionService', () => {
  let service: TournInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
