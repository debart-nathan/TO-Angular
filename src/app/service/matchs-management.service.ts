import { Injectable } from '@angular/core';

import { RoleAuthService } from './role-auth.service';
import { MatchService } from './match.service';
import { PoolService } from './pool.service';
import { TournService } from './tourn.service';
import { EventService } from './event.service';
import { MANAGED_MATCH,MATCH } from '../interface-repos';



@Injectable({
  providedIn: 'root',
})
export class MatchsManagementService {
  matchList: MANAGED_MATCH[];

  constructor(
    private RoleAuthS: RoleAuthService,
    private matchS: MatchService,
    private poolS: PoolService,
    private tournS: TournService,
    private eventS: EventService
  ) {
    let matchIdList = RoleAuthS.getRoleMatchList();
    this.matchList = matchIdList.map((matchR)=>{
      let match:MATCH =this.matchS.getMatch(matchR.id)
      let pool: {stage:number,idTourn:string}= poolS.getPool(match.idPool);
      let tourn: {name : string , idEvent:string} = tournS.getTournInfo(pool.idTourn);
      let event: {name:string} = eventS.getEventInfo(tourn.idEvent);
      return {
        ...match,
        idEvent:tourn.idEvent,
        nameEvent:event.name,
        idTourn:pool.idTourn,
        nameTourn: tourn.name,
        stage:pool.stage,
        role: matchR.role,
      }
    });
  }

  getActiveMatchs(): MANAGED_MATCH[] {
    return this.matchList.filter((match) => {
      return match.idWin != null;
    });
  }

  getClosedMatchs(): MANAGED_MATCH[] {
    return this.matchList.filter((match) => {
      return !(match.idWin != null);
    });
  }
}
