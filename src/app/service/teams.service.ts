import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

export interface TEAM {
  id: string;
  name: string;
  level: string;
  idPlayers: string[];
}
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teams: TEAM[];

  constructor() {
    this.teams = [];
  }

  getTeamsName(): { id: string; name: string }[] {
    return this.teams;
  }

  getTeamInfo(idTeam: string): TEAM {
    let team = this.teams.find((team) => {
      team.id == idTeam;
    });
    if (team == undefined) {
      throw new Error('team undefined');
    }
    return team;
  }
}
