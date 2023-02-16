import { Injectable } from '@angular/core';

const mockRoleEvList=[{ id: "1", idEvent: "3", role: "testrole" }]

@Injectable({
  providedIn: 'root',
})
export class RoleAuthService {
 
  roleMatchList: {
    id: string;
    parentId: string;
    idMatch: string;
    role: string;
  }[] = [];
  roleTournList: {
    id: string;
    parentId: string;
    idTourn: string;
    role: string;
  }[] = [];
  roleEventList: { id: string; idEvent: string; role: string }[] = [];
  constructor() {
    //todo set the get request
    this.roleEventList=mockRoleEvList
  }

  getRoleMatchList(): { id: string; role: string }[] {
    return this.roleMatchList.map((rM) => {
      return {
        id: rM.idMatch,
        role: rM.role,
      };
    });
  }
  getRoleTournList(): { id: string; role: string }[] {
    return this.roleTournList.map((rT) => {
      return {
        id: rT.idTourn,
        role: rT.role,
      };
    });
  }
  getRoleEventList(): { id: string; role: string }[] {
    return this.roleEventList.map((rE) => {
      return {
        id: rE.idEvent,
        role: rE.role,
      };
    });
  }
  getRoleTourn(id: string): string {
    let role = this.roleTournList.find((tourn)=>{
      return tourn.idTourn=id;
    })
    if(role==undefined){
      return ""
    }
    return role.role;
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
