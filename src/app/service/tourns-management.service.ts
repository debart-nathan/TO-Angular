import { Injectable } from '@angular/core';

import { RoleAuthService } from './role-auth.service';
import { TournService, TOURN } from './tourn.service';

export interface MANAGED_TOURN extends TOURN {
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class TournsManagementService {

  tournList: MANAGED_TOURN[];

  constructor(
    private RoleAuthS: RoleAuthService,
    private tournS: TournService
  ) {
    let tournIdList = RoleAuthS.getRoleTournList();

    this.tournList = tournIdList.map((tourn) => {
      let to = tournS.getTournInfo(tourn.id);
      return { ...to, ...{ role: tourn.role } };
    });
  }

  getActiveTourns(): MANAGED_TOURN [] {
    return this.tournList.filter((tourn) => {
      return tourn.active;
    });
  }

  getClosedTourns(): MANAGED_TOURN [] {
    return this.tournList.filter((tourn) => {
      return !(tourn.active);
    });
  }
}
