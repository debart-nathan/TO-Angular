import { Injectable } from '@angular/core';

import { TournService } from './tourn.service';
import { TeamService } from './teams.service';
import { PlayerService } from './player.service';
@Injectable({
  providedIn: 'root'
})
export class TournRegisterService {
  
  teamList: { id: string; name: string; }[] = [];

  constructor(private tournS:TournService, private teamS:TeamService) { 
    let teamIdList=teamS.getFullSportTeamIdList(tournS.tourn.sport)
    for (let id of teamIdList){
      this.teamList.push({id:id, name:teamS.getTeamName(id)});
    }
  }

  getRegistered() {
    let rTeamListId =this.tournS.getRegisteredTeamIdList()
    let rTeamList=[]
    for(let teamid in rTeamListId){
      let team =this.teamS.getTeamFullInfo(teamid)
      rTeamList.push(team)
    }
    return rTeamList;
  }
  
}
