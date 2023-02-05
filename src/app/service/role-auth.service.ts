import { Injectable } from '@angular/core';

const mockRoleEvList=[{ id: "1", eventId: "3", role: "testrole" }]

@Injectable({
  providedIn: 'root',
})
export class RoleAuthService {
  roleMatchList: {
    id: string;
    parentId: string;
    matchId: string;
    role: string;
  }[] = [];
  roleTournList: {
    id: string;
    parentId: string;
    tournId: string;
    role: string;
  }[] = [];
  roleEventList: { id: string; eventId: string; role: string }[] = [];
  constructor() {
    //todo set the get request
    this.roleEventList=mockRoleEvList
  }

  getRoleMatchList(): { id: string; role: string }[] {
    return this.roleMatchList.map((rM) => {
      return {
        id: rM.matchId,
        role: rM.role,
      };
    });
  }
  getRoleTournList(): { id: string; role: string }[] {
    return this.roleTournList.map((rT) => {
      return {
        id: rT.tournId,
        role: rT.role,
      };
    });
  }
  getRoleEventList(): { id: string; role: string }[] {
    return this.roleEventList.map((rE) => {
      return {
        id: rE.eventId,
        role: rE.role,
      };
    });
  }

  canEditEvent(idEv: string): boolean {
    //TODO add role test
    return true;
  }
  canEditTourn(idTour: string): boolean {
    //TODO add role test
    return true;
  }
  canEditMatch(idMatch: string): boolean {
    //TODO add role test
    return true;
  }
}
